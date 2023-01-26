import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter', () => {
  render(<App />);
  const counter = screen.getByText(/Counter is at/i);
  expect(counter).toBeInTheDocument();
});
