import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { discretenessOptions } from "../utils/graphUtils";
import { IData, IFilteredData, IDiscretenessOptions, ValueTypes, IAveragedData } from "../utils/types";



const sliceIntoChunks = <T,>(arr: T[], chunkSize: number): T[][] => {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const filterByDate = (data: IAveragedData[], startDate: string, endDate: string, value: string) => {
  const labels: string[] = []
  const averages: number[] = []
  data = data.filter(item => moment(item.label.split(' ')[ 0 ], "YY-MM-DD").isBetween(moment(startDate, "YY-MM-DD"), moment(endDate, "YY-MM-DD"), undefined, "[]"))
  data.forEach((item) => {
    labels.push(item.label)
    averages.push(item.averaged)
  })
  return {
    labels: labels,
    datasets: [ {
      label: value,
      data: averages,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    } ]
  }
}

const averageData = (arr: IData[][], value: ValueTypes) => {
  const data: IAveragedData[] = []
  arr.forEach((item) => {
    let count = 0
    const label = item[ 0 ].time.split(' ')[ 0 ]
    const averaged = item.reduce((prev, next) => {
      count++
      return prev + next[ value ]
    }, 0) / count
    data.push({ label, averaged })
  })
  return data
}

type Props = {
  data: IData[];
  dates: string[]
}

export const useFilter = ({ data, dates }: Props) => {
  const [ discreteness, setDiscreteness ] = useState<IDiscretenessOptions>(discretenessOptions[ 0 ])
  const [ value, setValue ] = useState<ValueTypes>('gasPrice')
  const [ filtered, setFiltered ] = useState<IFilteredData>()
  const [ averagedData, setAveragedData ] = useState<IAveragedData[]>([])
  useEffect(() => {
    const filteredData = [ ...data ];
    setAveragedData(averageData(sliceIntoChunks(filteredData, discreteness.number), value))
  }, [ discreteness, value, data ])
  useEffect(() => {
    setFiltered(filterByDate(averagedData, dates[ 0 ], dates[ 1 ], value))
  }, [ averagedData.length, dates, value ]);


  const handleDiscretenessChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDiscreteness = event.target.value;
    if (discreteness.name !== newDiscreteness) {
      setDiscreteness(discretenessOptions.find(a => a.name === newDiscreteness));
    }
  };
  const handleValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as ValueTypes;
    if (value !== newValue) {
      setValue(newValue)
    }
  }
  return {
    handleDiscretenessChange,
    handleValueChange,
    filtered,
  };
}