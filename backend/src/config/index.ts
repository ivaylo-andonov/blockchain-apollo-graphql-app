const {
  NODE_ENV,
  PORT = 5000
} = process.env;

const config = {
  env: NODE_ENV,
  port: PORT,
  isProduction: NODE_ENV === "production"
};

export type Config = typeof config;
export default config;
