interface CrosswordQuestion {
  number: number
  x: number
  y: number
  length: number
  direction: string
  desc: string
}

interface CrosswordConfig {
  sizeX: number
  sizeY: number
  question: Array<CrosswordQuestion>
}

export { CrosswordConfig, CrosswordQuestion }
