export interface IDiscretenessOptions {
  name: string,
  number: number
}

export interface IData {
  time: string
  gasPrice: number
  gasValue: number
  average: number
  maxGasPrice: number
  medianGasPrice: number
}

export interface IFilteredData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export interface IAveragedData {
  label: string,
  averaged: number
}

export type ValueTypes = 'gasPrice' | 'gasValue' | 'average' | 'maxGasPrice' | 'medianGasPrice'