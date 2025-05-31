import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTradeSchema, insertUserSchema, loginSchema } from "@shared/schema";
import { setupAuth, hashPassword, verifyPassword, requireAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication middleware
  setupAuth(app);

  // Auth routes
  app.post("/api/register", async (req: Request, res: Response) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      // Hash password
      const hashedPassword = await hashPassword(validatedData.password);
      
      // Create user
      const user = await storage.createUser({
        ...validatedData,
        password: hashedPassword,
      });

      // Set session
      req.session.userId = user.id;
      req.session.username = user.username;

      res.status(201).json({
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.displayName,
        joinedAt: user.joinedAt,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to register user" });
      }
    }
  });

  app.post("/api/login", async (req: Request, res: Response) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      // Find user
      const user = await storage.getUserByUsername(validatedData.username);
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // Verify password
      const isValidPassword = await verifyPassword(validatedData.password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // Set session
      req.session.userId = user.id;
      req.session.username = user.username;

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.displayName,
        joinedAt: user.joinedAt,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to login" });
      }
    }
  });

  app.post("/api/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to logout" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/me", requireAuth, async (req: Request, res: Response) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.displayName,
        joinedAt: user.joinedAt,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Get all trades
  app.get("/api/trades", async (req, res) => {
    try {
      const { region = "global", search, sort } = req.query;
      
      let trades;
      
      if (search) {
        trades = await storage.searchTrades(search as string, region as string);
      } else {
        trades = await storage.getTradesByRegion(region as string);
      }

      // Apply sorting
      if (sort === "oldest") {
        trades.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      } else if (sort === "popular") {
        trades.sort((a, b) => (b.views + b.responses) - (a.views + a.responses));
      }
      // Default is newest first (already sorted in storage)

      res.json(trades);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trades" });
    }
  });

  // Get single trade by ID
  app.get("/api/trades/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const trade = await storage.getTradeById(id);
      
      if (!trade) {
        return res.status(404).json({ message: "Trade not found" });
      }

      // Increment view count
      await storage.incrementTradeViews(id);
      
      res.json(trade);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trade" });
    }
  });

  // Create new trade
  app.post("/api/trades", requireAuth, async (req: Request, res: Response) => {
    try {
      const validatedData = insertTradeSchema.parse(req.body);
      const user = await storage.getUser(req.session.userId!);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const trade = await storage.createTrade({
        ...validatedData,
        authorName: user.displayName || user.username,
      }, user.id, user.region || "global");
      
      res.status(201).json(trade);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create trade" });
      }
    }
  });

  // Update trade
  app.put("/api/trades/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertTradeSchema.partial().parse(req.body);
      
      // Check if user owns the trade
      const existingTrade = await storage.getTradeById(id);
      if (!existingTrade || existingTrade.authorId !== req.session.userId) {
        return res.status(403).json({ message: "Not authorized to update this trade" });
      }
      
      const trade = await storage.updateTrade(id, validatedData);
      
      if (!trade) {
        return res.status(404).json({ message: "Trade not found" });
      }
      
      res.json(trade);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to update trade" });
      }
    }
  });

  // Delete trade
  app.delete("/api/trades/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      // Check if user owns the trade
      const existingTrade = await storage.getTradeById(id);
      if (!existingTrade || existingTrade.authorId !== req.session.userId) {
        return res.status(403).json({ message: "Not authorized to delete this trade" });
      }
      
      const deleted = await storage.deleteTrade(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Trade not found" });
      }
      
      res.json({ message: "Trade deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete trade" });
    }
  });

  // Increment trade responses
  app.post("/api/trades/:id/respond", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.incrementTradeResponses(id);
      res.json({ message: "Response recorded" });
    } catch (error) {
      res.status(500).json({ message: "Failed to record response" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
