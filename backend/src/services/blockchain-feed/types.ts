export type BlocksFeed = {
  blocks: BlockSummary[]
}

export type BlockSummary = {
  height: number
  hash: string
  time: number
}