import React from 'react';

const VideoItem = ({ item, selectVideo, isDetail }) => {
  return (
    <div className="bg-white dark:bg-indigo-400 p-2 rounded shadow-xl my-2 py-4">
      <div onClick={() => selectVideo(item)} aria-hidden="true">
        <div>
          <img
            src={item.snippet.thumbnails.default.url}
            alt="movieimage"
            className="w-16 md:w-32 lg:w-48"
          />
        </div>
        <div className="p-4">
          {isDetail && (
            <div>
              <p className="text-lg text-black dark:text-white font-semibold">
                {item.snippet.title}
              </p>
              <p className="text-gray-500 dark:text-gray-200 font-medium">
                {item.snippet.description}
              </p>
            </div>
          )}
          {!isDetail && (
            <p className="whitespace-normal text-black dark:text-gray-200 font-semibold">
              {item.snippet.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
