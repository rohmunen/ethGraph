import axios from "axios";
import { IData } from "../utils/types";

type getGasPricesRes = {
  ethereum: {
    transactions: IData[]
  }
}

export const getGasPrices = async (setGasPrices: React.Dispatch<React.SetStateAction<IData[]>>, setFilterDates: React.Dispatch<React.SetStateAction<string[]>>, setSliderDates: React.Dispatch<React.SetStateAction<string[]>>) => {
  const result = await axios.get<getGasPricesRes>('https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json')
  const transactions = result.data.ethereum.transactions
  setGasPrices(transactions)
  setFilterDates([ transactions[ 0 ].time.split(' ')[ 0 ], transactions[ transactions.length - 1 ].time.split(' ')[ 0 ] ])
  setSliderDates([ transactions[ 0 ].time.split(' ')[ 0 ], transactions[ transactions.length - 1 ].time.split(' ')[ 0 ] ])
}