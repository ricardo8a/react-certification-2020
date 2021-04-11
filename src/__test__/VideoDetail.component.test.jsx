import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetail from '../components/VideoDetail';
import mockedData from '../youtube-videos-mock.json';

describe('Test Set for the componet VideoDetail', () => {
  it('Render VideoDetail', () => {
    render(<VideoDetail video={mockedData.items[1]} />);
    const linkElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Render VideoDetail without video props', () => {
    render(<VideoDetail />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });
});
