import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    blocksFeed(daysAgo: DaysAgo): [BlockSummary] @cacheControl(maxAge: 60)
    blockDetails(hash: ID!): BlockDetails @cacheControl(maxAge: 60)
  }

  type BlockSummary {
    height: Int
    hash: ID
    time: Int
  }

  enum DaysAgo {
    ONE
    THREE
    FIVE
    SEVEN
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
    transactions: [Transaction] @cacheControl(maxAge: 60)
  }

  type Transaction {
    size: Int
    hash: String
    weight: Int
    time: Int
  }
`;

export default typeDefs;
