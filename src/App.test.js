import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

jest.mock('@splinetool/react-spline', () => () => <div>Spline Mock</div>);

test('renders one of the Home buttons', () => {
  render(<App />);
  const homeButtons = screen.getAllByText(/home/i);
  expect(homeButtons.length).toBeGreaterThan(0);
});
