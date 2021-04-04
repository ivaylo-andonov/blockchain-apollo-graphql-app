import { BlockChainDataSource } from "../services/blockchain-feed/dataSource";
import { BlockDetails } from "../services/blockchain-feed";

const rootResolversFactory = (blockchainDataSource: BlockChainDataSource) => ({
  Query: {
    blocksFeed: async () => blockchainDataSource.getLatestBlocksFeed(),
    blockDetails: async (_: unknown, { hash }: { hash: string }) => blockchainDataSource.getBlockDetails(hash)
  },
  BlockDetails: {
    blockIndex: ({ block_index }: BlockDetails) => block_index,
    prevBlock: ({ prev_block }: BlockDetails) => prev_block,
    transactions: ({ tx }: BlockDetails) => tx
  }
});

export type RootResolvers = ReturnType<typeof rootResolversFactory>;
export default rootResolversFactory;
