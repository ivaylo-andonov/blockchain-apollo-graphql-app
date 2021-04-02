import { BlockChainDataSourceFactory } from "../services/blockchain-feed/dataSource";
import { BlockDetails, BlockSummary } from "../services/blockchain-feed";

const rootResolversFactory = (blockchainDataSource: BlockChainDataSourceFactory) => ({
  Query: {
    blocksFeed: async () => blockchainDataSource.getLatestBlocksFeed(),
    blockDetails: async (_: unknown, { hash }: { hash: string }) => blockchainDataSource.getBlockDetails(hash)
  },
  BlockSummary: {
    height: ({ height }: BlockSummary) => height,
    hash: ({ hash }: BlockSummary) => hash,
    time: ({ time }: BlockSummary) => time
  },
  BlockDetails: {
    blockIndex: ({ block_index }: BlockDetails) => block_index,
    prevBlock: ({ prev_block }: BlockDetails) => prev_block,
    transactions: ({ tx }: BlockDetails) => tx
  }
});

export type RootResolvers = ReturnType<typeof rootResolversFactory>;

export default rootResolversFactory;
