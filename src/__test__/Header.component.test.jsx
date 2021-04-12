import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Test Set for the componet Header', () => {
  it('Reneder Header', () => {
    render(<Header profile="User" />);
    const linkElement = screen.getByText(/User/i);
    expect(linkElement).toBeInTheDocument();
  });
});
