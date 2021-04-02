const { BLOCKCHAIN_API_URL, NODE_ENV, PORT = 5000 } = process.env;

const config = {
  env: NODE_ENV,
  port: PORT,
  isProduction: NODE_ENV === "production",
  blockchainApiUrl: "https://blockchain.info" || BLOCKCHAIN_API_URL
};

export type Config = typeof config;
export default config;
