import React from 'react';

const VideoItem = ({ item }) => (
  <div className="inline-block px-2 w-64 h-64">
    <div className="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4">
      <img
        src={item.snippet.thumbnails.default.url}
        alt="movieimage"
        className="w-16 md:w-32 lg:w-48"
      />
      <div className="p-4">
        <p className="text-lg text-black font-semibold">{item.snippet.title}</p>
        <p className="text-gray-500 font-medium">{item.snippet.description}</p>
      </div>
    </div>
  </div>
);

export default VideoItem;
