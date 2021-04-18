import React from 'react'
import { render, screen } from '@testing-library/react'; 
import App from '../App';

test('renders learn react link', () => {
  const { rerender } = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  rerender(<App />);
  const linkElement1 = screen.getByText(/learn react/i);
  expect(linkElement1).toBeInTheDocument();
 
}); 

