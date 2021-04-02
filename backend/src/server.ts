import { blockchainDataSourceFactory } from "./services/blockchain-feed";
import { ApolloServer } from "apollo-server";
import resolversFactory from "./resolvers";
import typeDefs from "./typeDefs";
import config from "./config";
import { httpClientFactory } from "./services/http-client";
import { clientCache, createPersistedQueriesCache } from "./cache/redisCache";
import responseCachePlugin from "apollo-server-plugin-response-cache";

const httpClient = httpClientFactory();
const blockchainDataSource = blockchainDataSourceFactory(httpClient, config);
const resolvers = resolversFactory(blockchainDataSource);

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  subscriptions: false,
  plugins: [responseCachePlugin()],
  persistedQueries: {
    cache: createPersistedQueriesCache(clientCache)
  }
});
