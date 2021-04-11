import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="bg-white p-2 rounded shadow-xl my-2 py-4">
      <div>
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div className="p-4">
        <p className="text-lg text-black font-semibold">{video.snippet.title}</p>
        <p className="whitespace-normal text-gray-500 font-medium">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
