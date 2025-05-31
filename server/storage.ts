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

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async updateUserLastTradeTime(userId: number): Promise<void> {
    await db
      .update(users)
      .set({ lastTradePostedAt: new Date() })
      .where(eq(users.id, userId));
  }

  async updateUserRating(userId: number, newRating: number): Promise<void> {
    const user = await this.getUser(userId);
    if (user) {
      const totalRatings = user.totalRatings || 0;
      const currentAvg = user.averageRating || 0;
      const newTotal = totalRatings + 1;
      const newAvg = Math.round(((currentAvg * totalRatings) + newRating) / newTotal);
      
      await db
        .update(users)
        .set({ 
          averageRating: newAvg,
          totalRatings: newTotal
        })
        .where(eq(users.id, userId));
    }
  }

  async getAllTrades(): Promise<Trade[]> {
    return await db.select().from(trades).orderBy(trades.createdAt);
  }

  async getTradesByRegion(region: string): Promise<Trade[]> {
    return await db.select().from(trades)
      .where(eq(trades.region, region))
      .orderBy(trades.createdAt);
  }

  async getTradeById(id: number): Promise<Trade | undefined> {
    const [trade] = await db.select().from(trades).where(eq(trades.id, id));
    return trade || undefined;
  }

  async createTrade(insertTrade: InsertTrade, authorId: number, region: string): Promise<Trade> {
    const [trade] = await db
      .insert(trades)
      .values({ ...insertTrade, authorId, region })
      .returning();
    return trade;
  }

  async updateTradeStatus(id: number, status: string, acceptedById?: number): Promise<Trade | undefined> {
    const [trade] = await db
      .update(trades)
      .set({ status, acceptedById })
      .where(eq(trades.id, id))
      .returning();
    return trade || undefined;
  }

  async updateTrade(id: number, updates: Partial<Trade>): Promise<Trade | undefined> {
    const [trade] = await db
      .update(trades)
      .set(updates)
      .where(eq(trades.id, id))
      .returning();
    return trade || undefined;
  }

  async deleteTrade(id: number): Promise<boolean> {
    const result = await db.delete(trades).where(eq(trades.id, id));
    return (result.rowCount || 0) > 0;
  }

  async incrementTradeViews(id: number): Promise<void> {
    const trade = await this.getTradeById(id);
    if (trade) {
      await db
        .update(trades)
        .set({ views: trade.views + 1 })
        .where(eq(trades.id, id));
    }
  }

  async incrementTradeResponses(id: number): Promise<void> {
    const trade = await this.getTradeById(id);
    if (trade) {
      await db
        .update(trades)
        .set({ responses: trade.responses + 1 })
        .where(eq(trades.id, id));
    }
  }

  async searchTrades(query: string, region: string): Promise<Trade[]> {
    const allTrades = await db.select().from(trades).where(eq(trades.region, region));
    const lowercaseQuery = query.toLowerCase();
    return allTrades
      .filter(trade => 
        trade.title.toLowerCase().includes(lowercaseQuery) ||
        trade.wants.toLowerCase().includes(lowercaseQuery) ||
        trade.offers.toLowerCase().includes(lowercaseQuery)
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getChatsByTradeId(tradeId: number): Promise<Chat[]> {
    return await db.select().from(chats)
      .where(eq(chats.tradeId, tradeId))
      .orderBy(chats.createdAt);
  }

  async createChatMessage(chat: InsertChat): Promise<Chat> {
    const [message] = await db
      .insert(chats)
      .values(chat)
      .returning();
    return message;
  }

  async createRating(rating: InsertRating): Promise<Rating> {
    const [newRating] = await db
      .insert(ratings)
      .values(rating)
      .returning();
    return newRating;
  }

  async getRatingsByUserId(userId: number): Promise<Rating[]> {
    return await db.select().from(ratings)
      .where(eq(ratings.toUserId, userId))
      .orderBy(ratings.createdAt);
  }
}

export const storage = new DatabaseStorage();
