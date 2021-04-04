import nodeFetch, { RequestInit, Response } from "node-fetch";
import { throwRequestError } from "./utils";

export const INVALID_FORMAT = "Data source responded with invalid format";
export const DATA_SOURCE_ERROR = "There was an error at the external data provider";
export const timeout = 12 * 1000;

export const httpClientFactory = () => ({
  get: async (url: string, options?: RequestInit) => {
    const response = await nodeFetch(url, {
      ...options,
      timeout,
      method: "get"
    });
    return getJSONResponse(response);
  }
});

const getJSONResponse = async (response: Response) => {
  const responseText = await response.text();

  if (response.ok) {
    try {
      return JSON.parse(responseText);
    } catch (error) {
      throwRequestError(response, INVALID_FORMAT, responseText);
    }
  }

  throwRequestError(response, DATA_SOURCE_ERROR, responseText);
};

export type HttpClient = ReturnType<typeof httpClientFactory>;
