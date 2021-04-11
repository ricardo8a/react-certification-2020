import React, { useState, useEffect, useCallback } from 'react';
import env from 'react-dotenv';

import Header from '../Header';
import Content from '../Content';
import youtube from '../apis/youtube';
import mockedData from '../../youtube-videos-mock.json';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const useMock = env.MOCK;

  const mockData = () => {
    setVideos(mockedData.items);
  };

  const fetchData = useCallback(async () => {
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
  }, [searchTerm]);

  const findVideos = (keySearch) => {
    setSearchTerm(keySearch);
    if (useMock) {
      mockData();
    } else {
      fetchData();
    }
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
