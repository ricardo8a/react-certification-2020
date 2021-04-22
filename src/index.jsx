import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import GlobalProvider from './state/GlobalProvider';
import './assets/main.css';
import { getConfig } from './config';

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Auth0Provider {...providerConfig}>
        <App />
      </Auth0Provider>
      ,
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
