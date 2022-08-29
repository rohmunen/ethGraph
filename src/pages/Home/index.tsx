import { useEffect, useState } from "react"
import { getGasPrices } from "../../api/gas"
import { DateSlider } from "../../components/DateSlider"
import Graph from "../../components/Graph"
import { Select } from "../../components/Select"
import { useFilter } from "../../hooks/useFilter"
import { discretenessOptions, valueOptions } from "../../utils/graphUtils"
import { IData } from "../../utils/types"
import styles from './styles.module.scss'

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
    <main className={ styles.content }>
      <div className={ styles.content__controls }>
        <Select label="Select discreteness" onChange={ handleDiscretenessChange }>
          { discretenessOptions.map(opt => <option key={ opt.name } value={ opt.name }>{ opt.name }</option>) }
        </Select>
        <Select label="Select value" onChange={ handleValueChange }>
          { valueOptions.map(opt => <option key={ opt.displayName } value={ opt.value }>{ opt.displayName }</option>) }
        </Select>
      </div>
      <Graph data={ filtered } />
      <DateSlider dates={ apiData } setDates={ setDates } />
    </main >
  )
}