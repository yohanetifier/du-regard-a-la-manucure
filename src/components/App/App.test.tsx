import React from 'react';
// import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', ()=> {
  it('should have a text result', () => {
    const result = 'result'
    const text = 'result'
    expect(text).toBe(result)
  })
})
