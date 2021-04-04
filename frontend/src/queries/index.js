import { gql } from "@apollo/client";

export const getBlocksFeed = gql`
  query GetBlocksFeed {
    blocksFeed {
      time
      hash
      height
    }
  }
`;

export const getBlockDetails = gql`
  query GetBlockDetails($hash: ID!) {
    blockDetails(hash: $hash) {
      blockIndex
      fee
      hash
      size
      time
      height
      weight
      prevBlock
      transactions{
        hash
        time
        size
      }
    }
  }
`