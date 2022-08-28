import { useEffect, useState } from "react"
import { getGasPrices } from "../api/gas"
import { DateSlider } from "../components/DateSlider"
import Graph from "../components/Graph"
import { Data } from "../utils/types"

export const Home = () => {
  const apiData = [ '22-01-01', '22-08-05' ]
  const [ dates, setDates ] = useState(apiData)
  const [ data, setData ] = useState<Data[]>([])
  useEffect(() => {
    getGasPrices(setData)
  }, [])
  return (
    <>
      <Graph data={ data } dates={ dates } />
      <DateSlider dates={ apiData } setDates={ setDates } />
    </>
  )
}