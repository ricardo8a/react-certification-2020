import React, { useState, useEffect, useCallback } from 'react'

import Header from '../Header';
import Content from '../Content';
import youtube from '../apis/youtube';

const App = () => {
  const [videos, setVideos] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('Globant') 
  
  const findVideos = (keySearch) => {
    setSearchTerm(keySearch);
    fetchData();
  }

  const fetchData = useCallback(async () => {
    try {
    const response = await youtube.get('/search', {
      params: {
          q: searchTerm
      }
    });
    setVideos(response.data.items);
    } catch (error) {
      console.log(error)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  
  return (
    <div>
      <Header profile="User" findVideos={findVideos}/>
      <Content title="Ricardo Díaz Challenge!" itemVideosToShow={videos} />
    </div>
  );
}

export default App;
