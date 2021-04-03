import Redis from "ioredis";
import config from "../config";

export const redisClient = new Redis({ host: config.redisHost, port: config.redisPort });

export const cacheServiceFactory = (cache: Redis.Redis) => ({
  get: async (key: string): Promise<string | undefined> => {
    const value = await cache.get(key);
    return value || undefined;
  },
  set: async (key: string, value: string, { ttl }: any) => {
    if (ttl > 0) {
      await cache.set(key, value, "EX", ttl);
    }
    await cache.set(key, value);
  },
  delete: async (key: string) => {
    await cache.del(key);
  }
});
