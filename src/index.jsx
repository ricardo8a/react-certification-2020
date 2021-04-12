import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalProvider from './state/GlobalProvider';
import './assets/main.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
