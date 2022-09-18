const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!API_BASE_URL) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_BASE_URL environment variable'
  );
}

if (!TIMEOUT) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_TIMEOUT environment variable'
  );
}

if (!DOMAIN) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_DOMAIN environment variable'
  );
}

if (!CLIENT_ID) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_CLIENT_ID environment variable'
  );
}

export { API_BASE_URL, TIMEOUT, DOMAIN, CLIENT_ID };
