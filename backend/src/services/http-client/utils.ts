import { Headers, Response, ResponseType } from "node-fetch";

export const getRequestHeaders = () => {
  return {
    headers: {
      "content-type": "application/json",
      "accept-encoding": "gzip, deflate"
    }
  };
};

export const throwRequestError = (response: Response, errorMessage: string, responseBodyContent?: string) => {
  const { status, statusText, headers, type } = response;
  throw new CustomHttpError(errorMessage, {
    status,
    statusText,
    headers,
    type,
    responseBodyContent
  });
};

export class CustomHttpError extends Error {
  meta: ErrorMeta;

  constructor(message: string, meta: ErrorMeta) {
    super(message);
    this.meta = meta;
  }
}

export type ErrorMeta = {
  status: number;
  statusText: string;
  type?: ResponseType;
  headers?: Headers;
  responseBodyContent?: string;
};
