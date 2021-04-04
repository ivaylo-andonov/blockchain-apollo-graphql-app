import gql from "graphql-tag";
import typeDefs from "../typeDefs";
import { makeExecutableSchema } from "graphql-tools";
import { print, graphql } from "graphql";
import rootResolversFactory from "../resolvers";
import { blockchainServiceFactoryMock, mockBlockDetails, mockDataFeed } from "./mocks";

const blockchainServiceMock = blockchainServiceFactoryMock();
const resolvers = rootResolversFactory(blockchainServiceMock);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

describe("Blockchain functional test", () => {
  test("resolve blockchain data feed", async () => {
    blockchainServiceMock.getLatestBlocksFeed.mockResolvedValueOnce(mockDataFeed.blocks);
    const GetBlocksFeedQuery = print(gql`
      {
        blocksFeed {
          time
          hash
          height
        }
      }
    `);

    const { data } = await graphql(schema, GetBlocksFeedQuery);

    expect(data).toMatchObject({
      blocksFeed: mockDataFeed.blocks.map((block) => {
        return {
          time: block.time,
          hash: block.hash,
          height: block.height
        };
      })
    });
  });

  test("resolve blockchain block details data", async () => {
    blockchainServiceMock.getBlockDetails.mockResolvedValueOnce(mockBlockDetails);

    const GetBlockDetailsQuery = print(gql`
      {
        blockDetails(hash: "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d6c9") {
          fee
          hash
          size
          time
          height
          weight
          blockIndex
          prevBlock
          transactions {
            hash
            time
            size
          }
        }
      }
    `);

    const { data } = await graphql(schema, GetBlockDetailsQuery);

    expect(data).toMatchObject({
      blockDetails: {
        fee: mockBlockDetails.fee,
        hash: mockBlockDetails.hash,
        size: mockBlockDetails.size,
        time: mockBlockDetails.time,
        height: mockBlockDetails.height,
        weight: mockBlockDetails.weight,
        blockIndex: mockBlockDetails.block_index,
        prevBlock: mockBlockDetails.prev_block,
        transactions: mockBlockDetails.tx.map((tx) => {
          return {
            time: tx.time,
            hash: tx.hash,
            size: tx.size
          };
        })
      }
    });
  });
});
