import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    blocksFeed(publisher: Publisher): [BlockSummary]
  }

  type BlockSummary {
    height: Int
    hash: ID
    time: Int
  }

  enum Publisher {
    CRYPTO
  }
`;

export default typeDefs;
