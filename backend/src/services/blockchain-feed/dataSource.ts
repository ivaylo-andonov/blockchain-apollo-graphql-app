import { BlockDetails, BlockSummary } from "./types";
import { getRequestHeaders, HttpClient } from "../http-client";
import { Config } from "../../config";

export const blockchainDataSourceFactory = (httpClient: HttpClient, logger: Console, { blockchainApiUrl }: Config) => ({
  getLatestBlocksFeed: async (): Promise<BlockSummary[]> => {
    logger.log("HIT BLOCKS FEED");

    const { blocks } = await httpClient.get(`${blockchainApiUrl}/blocks?format=json`, getRequestHeaders());
    return blocks;
  },
  getBlockDetails: async (hash: string): Promise<BlockDetails> => {
    logger.log("HIT BLOCK DETAILS");

    return await httpClient.get(`${blockchainApiUrl}/rawblock/${hash}`, getRequestHeaders());
  }
});

export type BlockChainDataSource = ReturnType<typeof blockchainDataSourceFactory>;
