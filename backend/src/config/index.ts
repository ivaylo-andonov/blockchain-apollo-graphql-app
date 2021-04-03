const { BLOCKCHAIN_API_URL, NODE_ENV, REDIS_HOST, PORT } = process.env;

const config = {
  env: NODE_ENV,
  port: PORT || 5000,
  isProduction: NODE_ENV === "production",
  blockchainApiUrl: BLOCKCHAIN_API_URL || "https://blockchain.info",
  redisHost: REDIS_HOST || "localhost",
  redisPort: 6379
};

export type Config = typeof config;
export default config;
