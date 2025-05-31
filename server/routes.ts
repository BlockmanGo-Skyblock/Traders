import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTradeSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all trades
  app.get("/api/trades", async (req, res) => {
    try {
      const { category, search, sort } = req.query;
      
      let trades;
      
      if (search) {
        trades = await storage.searchTrades(search as string);
      } else if (category) {
        trades = await storage.getTradesByCategory(category as string);
      } else {
        trades = await storage.getAllTrades();
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
  app.post("/api/trades", async (req, res) => {
    try {
      const validatedData = insertTradeSchema.parse(req.body);
      const trade = await storage.createTrade(validatedData);
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
  app.put("/api/trades/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertTradeSchema.partial().parse(req.body);
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
  app.delete("/api/trades/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
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
