// In-memory storage for demo purposes (no database required)
import type { InsertSubscriber, Subscriber } from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

const subscribersStore: Subscriber[] = [];
let nextId = 1;

export class InMemoryStorage implements IStorage {
  async createSubscriber(data: InsertSubscriber): Promise<Subscriber> {
    const subscriber: Subscriber = {
      id: nextId++,
      email: data.email,
      createdAt: new Date(),
    };
    subscribersStore.push(subscriber);
    console.log('New subscriber:', subscriber.email);
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return subscribersStore.find(s => s.email === email);
  }
}

export const storage = new InMemoryStorage();
