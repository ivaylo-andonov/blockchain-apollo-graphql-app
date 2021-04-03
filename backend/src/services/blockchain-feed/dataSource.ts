import { BlockDetails, BlocksFeed, BlockSummary } from "./types";
import { getRequestHeaders, HttpClient } from "../http-client";
import { Config } from "../../config";

export const blockchainDataSourceFactory = (httpClient: HttpClient, { blockchainApiUrl }: Config) => ({
  getLatestBlocksFeed: async (): Promise<BlockSummary[]> => {
    console.log("HIT BLOCKS FEED");

    const { blocks }: BlocksFeed = await httpClient.get(`${blockchainApiUrl}/blocks?format=json`, getRequestHeaders());
    return blocks;
  },
  getBlockDetails: async (hash: string): Promise<BlockDetails> => {
    console.log("HIT BLOCK DETAILS");

    return await httpClient.get(`${blockchainApiUrl}/rawblock/${hash}`, getRequestHeaders());
  }
});

export type BlockChainDataSourceFactory = ReturnType<typeof blockchainDataSourceFactory>;
