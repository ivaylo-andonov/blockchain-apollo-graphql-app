import { blockchainDataSourceFactory } from "./services/blockchain-feed";
import { ApolloServer } from "apollo-server";
import resolversFactory from "./resolvers";
import typeDefs from "./typeDefs";
import config from "./config";
import { httpClientFactory } from "./services/http-client";

const httpClient = httpClientFactory();

const blockchainDataSource = blockchainDataSourceFactory(httpClient, config);
const resolvers = resolversFactory(blockchainDataSource);

export default new ApolloServer({
  typeDefs,
  resolvers,
  engine: false,
  subscriptions: false,
  playground: true
});
