import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import env from 'react-dotenv';

import Header from '../Header';
import Content from '../Content';
import Login from '../../pages/Login';
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
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={theme}>
            <Header findVideos={findVideos} />
            <Content title="Ricardo Díaz Challenge!" itemVideosToShow={videos} />
          </div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
