import React from 'react';
import VideoItem from '../VideoItem';

const Content = ({ title, itemVideosToShow }) => (
  <div>
    <div>
      <h1 className="font-semibold text-2xl">{title}</h1>
    </div>

    <div className="container mx-auto">
      {itemVideosToShow.map((videoItem) => (
        <VideoItem
          key={videoItem.id.videoId ? videoItem.id.videoId : videoItem.id.channelId}
          item={videoItem}
        />
      ))}
    </div>
  </div>
);

export default Content;
