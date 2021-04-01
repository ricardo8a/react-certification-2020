import React, { useState, useEffect, useCallback } from 'react';

import Header from '../Header';
import Content from '../Content';
import youtube from '../apis/youtube';
import mockedData from '../../youtube-videos-mock.json';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Globant');
  const useMock = true;

  const mockData = () => {
    setVideos(mockedData.items);
  };

  const fetchData = useCallback(async () => {
    if (useMock) {
      mockData();
    } else {
      try {
        const response = await youtube.get('/search', {
          params: {
            q: searchTerm,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchTerm, useMock]);

  const findVideos = (keySearch) => {
    setSearchTerm(keySearch);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Header profile="User" findVideos={findVideos} />
      <Content title="Ricardo Díaz Challenge!" itemVideosToShow={videos} />
    </div>
  );
};

export default App;
