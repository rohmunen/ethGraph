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
import { IFilteredData } from '../../utils/types';

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
  data: IFilteredData
}

const Graph = ({ data }: Props) => {
  return (
    <>
      {
        data && <Line
          options={ options }
          data={ data }
        />
      }
    </>
  )
}

export default Graph