import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetailView from '../components/VideoDetailView';
import mockedData from '../youtube-videos-mock.json';

describe('Test Set for the componet VideoDetail', () => {
  it('Render VideoDetail', () => {
    render(<VideoDetailView video={mockedData.items[1]} videos={mockedData.items} />);
    const linkElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    expect(linkElement).toBeInTheDocument();
  });
});
