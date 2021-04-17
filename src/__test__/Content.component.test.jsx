import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '../components/Content';
import mockedData from '../youtube-videos-mock.json';

describe('Test Set for the componet Content', () => {
  it('Reneder with mocked data', () => {
    render(<Content title="test" itemVideosToShow={mockedData.items} />);
    const linkElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    expect(linkElement).toBeInTheDocument();
  });
});
