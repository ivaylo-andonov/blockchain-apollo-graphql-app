import { blockchainDataSourceFactory } from "../services/blockchain-feed";
import { httpClientFactoryMock, mockBlockDetails, mockDataFeed } from "./mocks";
import config from "../config";

describe("Blockchain service", () => {
  afterEach(() => {
    httpClientMock.get.mockReset();
  });

  const httpClientMock = httpClientFactoryMock();
  const headersMock = {
    headers: {
      "content-type": "application/json",
      "accept-encoding": "gzip, deflate"
    }
  };
  const blockchainDataSource = blockchainDataSourceFactory(httpClientMock, config);

  test("getLatestBlocksFeed should return correct data and call http client with args", async () => {
    httpClientMock.get.mockResolvedValueOnce(mockDataFeed);
    const expected = await blockchainDataSource.getLatestBlocksFeed();
    expect(expected).toEqual(mockDataFeed.blocks);
    expect(httpClientMock.get).toBeCalledWith(`${config.blockchainApiUrl}/blocks?format=json`, headersMock);
  });

  test("getBlockDetails should throw return correct data and call http client with args", async () => {
    const hashMock = "0000000000000000000beeadcf0b45932a6a4157dfc4302eedfc2bfc45f8d6c9";
    httpClientMock.get.mockResolvedValueOnce(mockBlockDetails);
    const expected = await blockchainDataSource.getBlockDetails(hashMock);
    expect(expected).toEqual(mockBlockDetails);
    expect(httpClientMock.get).toBeCalledWith(`${config.blockchainApiUrl}/rawblock/${hashMock}`, headersMock);
  });
});
