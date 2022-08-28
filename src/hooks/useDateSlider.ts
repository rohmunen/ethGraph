import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { Data, IDiscretenessOptions, ValueTypes } from "../utils/types";

type DateSliderProps = {
  dates: string[],
  setDates: React.Dispatch<React.SetStateAction<string[]>>
}

export const useDateSlider = ({ dates, setDates }: DateSliderProps) => {
  const [ maxRange, setMaxRange ] = useState(0)
  const [ currentValue, setCurrentValue ] = useState([])
  const [ startDateLabel, setStartDateLabel ] = useState('')
  const [ endDateLabel, setEndDateLabel ] = useState('')

  useEffect(() => {
    const date = [ ...dates ]
    let range = calculateDateRange(date)
    setMaxRange(Math.abs(range))
    setCurrentValue([ 0, Math.abs(range) ])
  }, [])

  useEffect(() => {
    updateDates()
  }, [ currentValue ])


  const calculateDateRange = (dates: string[]) => {
    let startDate = moment(dates[ 0 ], "YY-MM-DD")
    let endDate = moment(dates[ 1 ], "YY-MM-DD")
    return endDate.diff(startDate, 'days')
  }

  const onDateChange = (value: number[]) => {
    setCurrentValue([ value[ 0 ], value[ 1 ] ])
    updateDates()
  }

  const updateDates = () => {
    let [ min, max ] = currentValue
    let start = moment(dates[ 0 ], "YY-MM-DD").add(min, 'd')
    let end = moment(dates[ 1 ], "YY-MM-DD").subtract(maxRange - max, 'd')
    setStartDateLabel(formatDate(start))
    setEndDateLabel(formatDate(end))
    setDates([ formatDate(start), formatDate(end) ])
  }

  const formatDate = (date: moment.Moment) => {
    let day, month, year = 0
    day = date.get('date')
    month = date.get('month') + 1
    year = date.get('year')
    return year % 100 + '-' + month + '-' + day
  }

  return {
    onDateChange,
    startDateLabel,
    endDateLabel,
    maxRange,
    currentValue
  };
}