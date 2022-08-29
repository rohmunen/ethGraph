import axios from "axios";
import { IData } from "../utils/types";

type getGasPricesRes = {
  ethereum: {
    transactions: IData[]
  }
}

export const getGasPrices = async (setGasPrices: React.Dispatch<React.SetStateAction<IData[]>>) => {
  const data = await axios.get<getGasPricesRes>('https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json')
  setGasPrices(data.data.ethereum.transactions)
}