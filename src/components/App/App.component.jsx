import React from 'react';

import Header from '../Header';
import Content from '../Content';
import mockedData from '../../youtube-videos-mock.json';

function App() {
  return (
    <div>
      <Header profile="User" />
      <Content title="Ricardo Díaz Challenge!" itemVideosToShow={mockedData.items} />
    </div>
  );
}

export default App;
