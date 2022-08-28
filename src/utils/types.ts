export interface IDiscretenessOptions {
  name: string,
  number: number
}

export interface Data {
  time: string
  gasPrice: number
  gasValue: number
  average: number
  maxGasPrice: number
  medianGasPrice: number
}

export type ValueTypes = 'gasPrice' | 'gasValue' | 'average' | 'maxGasPrice' | 'medianGasPrice'