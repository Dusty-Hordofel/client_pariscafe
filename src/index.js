import { Auth0Provider } from '@auth0/auth0-react';
import { DOMAIN, CLIENT_ID, AUDIENCE } from './config/Config';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const providerConfig = {
  domain: DOMAIN,
  clientId: CLIENT_ID,
  audience: AUDIENCE,
  redirectUri: window.location.origin,
};
root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
