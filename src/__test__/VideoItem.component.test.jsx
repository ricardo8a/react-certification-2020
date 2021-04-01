import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItem from './../components/VideoItem';
import mockedData from './../youtube-videos-mock.json';

describe('Test Set for the componet VideoItem', () => {
  it('Reneder VideoItem', () => {
    render(<VideoItem item={mockedData.items[1]} />);
    const linkElement = screen.getByText(/Welcome to Wizeline Guadalajara/i);
    expect(linkElement).toBeInTheDocument();
  });
});
