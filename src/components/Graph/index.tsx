import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useFilter } from '../../hooks/useFilter';
import { discretenessOptions, valueOptions } from '../../utils/graphUtils';
import { Data } from '../../utils/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Gas prices',
    },
  },
};

type Props = {
  data: Data[]
  dates: string[]
}

const Graph = ({ data, dates }: Props) => {
  const {
    handleDiscretenessChange,
    filtered,
    handleValueChange
  } = useFilter({ data, discretenessOptions, dates })

  return (
    <>
      <select onChange={ handleDiscretenessChange }>
        { discretenessOptions.map(opt => <option value={ opt.name }>{ opt.name } </option>) }
      </select>
      <select onChange={ handleValueChange }>
        { valueOptions.map(opt => <option value={ opt.value }>{ opt.displayName } </option>) }
      </select>
      {
        filtered && <Line
          options={ options }
          data={ filtered }
        />
      }
    </>
  )
}

export default Graph