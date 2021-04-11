import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItem from '../components/VideoItem';
import mockedData from '../youtube-videos-mock.json';

describe('Test Set for the componet VideoItem', () => {
  it('Render VideoItem isDetail false', () => {
    render(<VideoItem item={mockedData.items[1]} isDetail={false} />);
    const linkElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Render VideoItem isDetail true', () => {
    render(<VideoItem item={mockedData.items[1]} isDetail />);
    const titleElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    const linkElement = screen.getByText(/Follow Hector Padilla/i);
    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
