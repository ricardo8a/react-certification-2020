import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="bg-white dark:bg-indigo-400 p-2 rounded shadow-xl my-2 py-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div className="p-4">
        <p className="text-lg text-black dark:text-white font-semibold">
          {video.snippet.title}
        </p>
        <p className="whitespace-normal text-gray-500 dark:text-gray-200 font-medium">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
