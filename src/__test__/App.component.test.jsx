import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from '../state/GlobalProvider';
import App from '../components/App';

describe('Test Set for the componet Header', () => {
  it('Reneder Header', () => {
    render(
      <GlobalProvider>
        <App />
      </GlobalProvider>
    );
    const linkElement = screen.getByText(/User/i);
    expect(linkElement).toBeInTheDocument();
  });
});
