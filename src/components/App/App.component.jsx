import React, { useState, useEffect, useCallback } from 'react';
import env from 'react-dotenv';

import Header from '../Header';
import Content from '../Content';
import youtube from '../apis/youtube';
import { useGlobalContext } from '../../state/GlobalProvider';
import mockedData from '../../youtube-videos-mock.json';

const App = () => {
  const { state, dispatch } = useGlobalContext();
  const [videos, setVideos] = useState([]);
  const useMock = env.MOCK;
  const query = state.searchText;
  const theme = state.darkMode ? 'dark' : '';

  const mockData = () => {
    setVideos(mockedData.items);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: query,
          maxResults: 50,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
      mockData();
    }
  }, [query]);

  const findVideos = (keySearch) => {
    dispatch({ type: 'CHANGE_SEARCH_TEXT', payload: keySearch });
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
    <div className={theme}>
      <Header profile="User" findVideos={findVideos} />
      <Content title="Ricardo Díaz Challenge!" itemVideosToShow={videos} />
    </div>
  );
};

export default App;
