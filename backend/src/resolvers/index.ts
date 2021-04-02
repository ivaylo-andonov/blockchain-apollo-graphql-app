import { PixelDataSourceFactory } from "../services/blockchain-feed/dataSource";
import { BlockSummary } from "../services/blockchain-feed";

const rootResolversFactory = (pixelDataSource: PixelDataSourceFactory) => ({
  Query: {
    blocksFeed: async (_: unknown) => pixelDataSource.getLatestBlocksFeed()
  },
  BlockSummary: {
    height: ({ height }: BlockSummary) => height,
    hash: ({ hash }: BlockSummary) => hash,
    time: ({ time }: BlockSummary) => time
  }
});

export type RootResolvers = ReturnType<typeof rootResolversFactory>;

export default rootResolversFactory;
