import { BlocksFeed, BlockSummary } from "./types";
import { getRequestHeaders, HttpClient } from "../http-client";

export const blockchainDataSourceFactory = (
  httpClient: HttpClient,
  config: any
) => ({
  getLatestBlocksFeed: async (): Promise<BlockSummary[]> => {
    console.log(config)
    const requestHeaders = getRequestHeaders();
    const { blocks }: BlocksFeed = await httpClient.get(
      "https://blockchain.info/blocks?format=json",
      requestHeaders
    );
    console.log("blocks", blocks)
    return blocks;
  }
});

export type PixelDataSourceFactory = ReturnType<typeof blockchainDataSourceFactory>;
