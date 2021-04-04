import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    blocksFeed: [BlockSummary] @cacheControl(maxAge: 3600)
    blockDetails(hash: ID!): BlockDetails @cacheControl(maxAge: 3600)
  }

  type BlockSummary {
    height: Int
    hash: ID
    time: Int
  }

  type BlockDetails {
    blockIndex: Int
    fee: Int
    hash: ID
    height: Int
    prevBlock: ID
    size: Int
    time: Int
    weight: Int
    transactions: [Transaction] @cacheControl(maxAge: 3600)
  }

  type Transaction {
    size: Int
    hash: String
    weight: Int
    time: Int
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE
`;

export default typeDefs;
