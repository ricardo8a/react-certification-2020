import React from 'react';
import VideoItem from '../VideoItem';
//<div className="container mx-auto">
const Content = ({ title, itemVideosToShow }) => (
  <div>
    <div className="py-10 text-center">
      <h1 className="font-extrabold text-4xl">{title}</h1>
    </div>

    <div className="bg-blue-400 min-h-screen fex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
        {itemVideosToShow.map(videoItem => (
          <VideoItem
            key={videoItem.id.videoId ? videoItem.id.videoId : videoItem.id.channelId}
            item={videoItem}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Content;
