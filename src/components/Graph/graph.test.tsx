import { render, screen } from '@testing-library/react'
import Graph from ".";
import '@testing-library/jest-dom';

test('renders graph', () => {
  render(<Graph data={ [] } dates={ [ '22-01-01', '23-01-01' ] } data-testid="graph" />)
  expect(screen.getByText(/Graph component/i)).toBeInTheDocument()
})