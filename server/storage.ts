import { users, trades, type User, type InsertUser, type Trade, type InsertTrade } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Trade operations
  getAllTrades(): Promise<Trade[]>;
  getTradesByRegion(region: string): Promise<Trade[]>;
  getTradeById(id: number): Promise<Trade | undefined>;
  createTrade(trade: InsertTrade, authorId: number, region: string): Promise<Trade>;
  updateTrade(id: number, trade: Partial<Trade>): Promise<Trade | undefined>;
  deleteTrade(id: number): Promise<boolean>;
  incrementTradeViews(id: number): Promise<void>;
  incrementTradeResponses(id: number): Promise<void>;
  searchTrades(query: string, region: string): Promise<Trade[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private trades: Map<number, Trade>;
  private currentUserId: number;
  private currentTradeId: number;

  constructor() {
    this.users = new Map();
    this.trades = new Map();
    this.currentUserId = 1;
    this.currentTradeId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser,
      email: insertUser.email || null,
      displayName: insertUser.displayName || null,
      region: insertUser.region || "global",
      id,
      lastTradePostedAt: null,
      averageRating: null,
      totalRatings: null,
      joinedAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async getAllTrades(): Promise<Trade[]> {
    return Array.from(this.trades.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getTradesByRegion(region: string): Promise<Trade[]> {
    return Array.from(this.trades.values())
      .filter(trade => trade.region === region)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTradeById(id: number): Promise<Trade | undefined> {
    return this.trades.get(id);
  }

  async createTrade(insertTrade: InsertTrade, authorId: number, region: string): Promise<Trade> {
    const id = this.currentTradeId++;
    const trade: Trade = {
      ...insertTrade,
      notes: insertTrade.notes || null,
      id,
      authorId,
      region,
      status: "open",
      acceptedById: null,
      views: 0,
      responses: 0,
      images: null,
      createdAt: new Date(),
    };
    this.trades.set(id, trade);
    return trade;
  }

  async updateTrade(id: number, updates: Partial<Trade>): Promise<Trade | undefined> {
    const existingTrade = this.trades.get(id);
    if (!existingTrade) return undefined;

    const updatedTrade = { ...existingTrade, ...updates };
    this.trades.set(id, updatedTrade);
    return updatedTrade;
  }

  async deleteTrade(id: number): Promise<boolean> {
    return this.trades.delete(id);
  }

  async incrementTradeViews(id: number): Promise<void> {
    const trade = this.trades.get(id);
    if (trade) {
      trade.views += 1;
      this.trades.set(id, trade);
    }
  }

  async incrementTradeResponses(id: number): Promise<void> {
    const trade = this.trades.get(id);
    if (trade) {
      trade.responses += 1;
      this.trades.set(id, trade);
    }
  }

  async searchTrades(query: string, region: string): Promise<Trade[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.trades.values())
      .filter(trade => 
        trade.region === region &&
        (trade.title.toLowerCase().includes(lowercaseQuery) ||
        trade.wants.toLowerCase().includes(lowercaseQuery) ||
        trade.offers.toLowerCase().includes(lowercaseQuery))
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
