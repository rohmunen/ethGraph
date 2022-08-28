import { useEffect, useState } from "react"
import { getGasPrices } from "../api/gas"
import { DateSlider } from "../components/DateSlider"
import Graph from "../components/Graph"
import { useFilter } from "../hooks/useFilter"
import { discretenessOptions, valueOptions } from "../utils/graphUtils"
import { IData } from "../utils/types"

export const Home = () => {
  const apiData = [ '22-01-01', '22-08-05' ]
  const [ dates, setDates ] = useState(apiData)
  const [ data, setData ] = useState<IData[]>([])
  useEffect(() => {
    getGasPrices(setData)
  }, [])
  const {
    filtered,
    handleDiscretenessChange,
    handleValueChange
  } = useFilter({ data, dates })
  return (
    <>
      <select onChange={ handleDiscretenessChange }>
        { discretenessOptions.map(opt => <option key={ opt.name } value={ opt.name }>{ opt.name }</option>) }
      </select>
      <select onChange={ handleValueChange }>
        { valueOptions.map(opt => <option key={ opt.displayName } value={ opt.value }>{ opt.displayName }</option>) }
      </select>
      <Graph data={ filtered } />
      <DateSlider dates={ apiData } setDates={ setDates } />
    </>
  )
}