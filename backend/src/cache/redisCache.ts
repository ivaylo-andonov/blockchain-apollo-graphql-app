import Redis from "ioredis";

export const clientCache = new Redis({ host: "redis", port: 6379 });

export const createPersistedQueriesCache = (cacheService: Redis.Redis) => ({
  get: async (key: string): Promise<string | undefined> => {
    const value = await cacheService.get(key);
    return value || undefined;
  },
  set: async (key: string, value: string) => {
    await cacheService.set(key, value);
  },
  delete: async (key: string) => !!(await cacheService.del(key))
});
