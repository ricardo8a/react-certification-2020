import React from 'react';
import VideoDetail from '../VideoDetail';
import VideoItem from '../VideoItem';

const VideoDetailView = ({ videoToPlay, videos }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 bg-white p-2 rounded shadow-xl my-2 py-4">
        <VideoDetail video={videoToPlay} />
      </div>
      <div>
        <div className="grid grid-cols-1">
          {videos.map((videoItem) => (
            <VideoItem
              key={videoItem.id.videoId ? videoItem.id.videoId : videoItem.id.channelId}
              item={videoItem}
              isDetail={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetailView;
