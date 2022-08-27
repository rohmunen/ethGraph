import { render, screen } from '@testing-library/react'
import Graph from ".";
import '@testing-library/jest-dom';

test('renders graph', () => {
  render(<Graph data-testid="graph"/>)
  expect(screen.getByText(/Graph component/i)).toBeInTheDocument()
})