import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import GlobalProvider from '../state/GlobalProvider';

describe('Test Set for the componet Header', () => {
  it('Reneder Header', () => {
    render(
      <GlobalProvider>
        <Header profile="User" />
      </GlobalProvider>
    );
    const linkElement = screen.getByText(/User/i);
    expect(linkElement).toBeInTheDocument();
  });
});
