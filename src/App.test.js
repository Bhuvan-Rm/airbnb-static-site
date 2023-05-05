import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.queryByAltText("airbnb-logo")
  expect(logo).toHaveAttribute('src', '../images/airbnb-logo.png');
 
});
