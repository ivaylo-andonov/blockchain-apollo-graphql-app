import { blockchainDataSourceFactory } from "./services/blockchain-feed";
import { ApolloServer } from "apollo-server";
import resolversFactory from "./resolvers";
import typeDefs from "./typeDefs";
import config from "./config";
import { httpClientFactory } from "./services/http-client";
import { redisClient, cacheServiceFactory } from "./cache/redisCache";
import responseCachePlugin from "apollo-server-plugin-response-cache";

const logger = global.console;
const httpClient = httpClientFactory();
const cacheService = cacheServiceFactory(redisClient);
const blockchainDataSource = blockchainDataSourceFactory(httpClient, logger, config);
const resolvers = resolversFactory(blockchainDataSource);

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  subscriptions: false,
  plugins: [responseCachePlugin({ cache: cacheService })],
  persistedQueries: {
    cache: cacheService
  }
});
