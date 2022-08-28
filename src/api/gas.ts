import axios from "axios";
import { Data } from "../utils/types";

type getGasPricesRes = {
  ethereum: {
    transactions: Data[]
  }
}

export const getGasPrices = async (setGasPrices: React.Dispatch<React.SetStateAction<Data[]>>) => {
  const data = await axios.get('https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json')
  setGasPrices(data.data.ethereum.transactions)
}