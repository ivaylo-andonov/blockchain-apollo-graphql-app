import { BlockChainDataSource } from "../services/blockchain-feed";
import { HttpClient } from "../services/http-client";

export const mockDataFeed = {
  blocks: [
    {
      height: 677640,
      hash: "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d6c9",
      time: 1617495055,
      main_chain: true
    },
    {
      height: 677641,
      hash: "000000000000000000040684b5f3fb7b7403b1d1b758c8e8e6c3ce1f6e5cdc08",
      time: 1617495849,
      main_chain: true
    },
    {
      height: 677642,
      hash: "00000000000000000001e9213ab422e556b05f02c08b0bd4b26c9bfa1f35fe8a",
      time: 1617495957,
      main_chain: true
    }
  ]
};

export const mockBlockDetails = {
  hash: "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d6c9",
  prev_block: "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d567",
  time: 1617495055,
  size: 172636266,
  block_index: 123456,
  height: 677640,
  weight: 1933828,
  fee: 0,
  tx: [
    {
      hash: "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d6c9",
      time: 1617495055,
      size: 172636266,
      weight: 1933828
    }
  ]
};

export const blockchainServiceFactoryMock = (): jest.Mocked<BlockChainDataSource> => ({
  getBlockDetails: jest.fn(),
  getLatestBlocksFeed: jest.fn()
});

export const httpClientFactoryMock = (): jest.Mocked<HttpClient> => ({
  get: jest.fn()
});

export const loggerFactoryMock = (): jest.Mocked<any> => ({
  log: jest.fn()
});
