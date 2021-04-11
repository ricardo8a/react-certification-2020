import React, { useState } from 'react';
import VideoItem from '../VideoItem';
import VideoDetailView from '../VideoDetailView';

const Content = ({ title, itemVideosToShow }) => {
  const [seletectVideo, setSeletectVideo] = useState();
  const [home, setHome] = useState(true);

  const selectVideo = (video) => {
    setSeletectVideo(video);
    setHome(false);
  };

  const goHome = () => {
    setHome(true);
  };

  return (
    <div>
      <div className="py-10 text-center">
        <h1 className="font-extrabold text-4xl">{title}</h1>
      </div>

      <div className="bg-blue-400 min-h-screen fex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
          {home &&
            itemVideosToShow.map((videoItem) => (
              <VideoItem
                key={videoItem.id.videoId ? videoItem.id.videoId : videoItem.id.channelId}
                item={videoItem}
                selectVideo={selectVideo}
                isDetail
              />
            ))}
        </div>
        {!home && <VideoDetailView videoToPlay={seletectVideo} videos={itemVideosToShow} />}
        {!home && (
          <div onClick={goHome} aria-hidden="true">
            Back home
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
