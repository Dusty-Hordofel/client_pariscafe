import { Auth0Provider } from '@auth0/auth0-react';
import { DOMAIN, CLIENT_ID, AUDIENCE } from './config/Config';
import history from './components/util/history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.origin
  ); //window.location.origin is the current url & appState.returnTo is the url that the user was trying to access before being redirected to the login page
};

const providerConfig = {
  domain: DOMAIN,
  clientId: CLIENT_ID,
  audience: AUDIENCE,
  redirectUri: window.location.origin,
  onRedirectCallback,
};
root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
