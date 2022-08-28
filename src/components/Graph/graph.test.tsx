import { render, screen } from '@testing-library/react'
import Graph from ".";
import '@testing-library/jest-dom';

test('renders graph', () => {
  render(<Graph data={ {
    labels: [ 'label' ],
    datasets: [ {
      label: 'test graph',
      data: [ 1 ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    } ]
  }
  } />)
  expect(screen.getByText(/Graph component/i)).toBeInTheDocument()
})