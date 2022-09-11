import axios from 'axios';
import { TIMEOUT, API_BASE_URL } from '../config/Config';

//axios global settings

//axios.defaults.headers.common['Content-Type'] or ['Accept'] = 'application/json' is used to set the default content type for all requests. If you want to set the content type for a specific request, you can use axios.post(url, data, { headers: { 'Content-Type': 'application/json' } }) instead.
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});
