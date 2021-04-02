export type BlocksFeed = {
  blocks: BlockSummary[];
};

export type BlockSummary = {
  height: number;
  hash: string;
  time: number;
};

export type BlockDetails = {
  block_index: number;
  fee: number;
  hash: string;
  height: number;
  prev_block: string;
  size: number;
  time: number;
  weight: number;
  tx: Transaction[];
};

export type Transaction = {
  size: number;
  hash: string;
  weight: number;
  time: number;
};
