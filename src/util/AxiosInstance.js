import axios from 'axios';
import { TIMEOUT, API_BASE_URL } from '../config/Config';

//axios global settings

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT
});


AxiosInstance.interceptors.response.use((response) => {

  console.log("🚀 ~ file: AxiosInstance.js ~ line 17 ~ response", response);
  if (response.data.redirect) {

    window.location = response.data.redirect;
  }

  return response;

}, (error) => {
  return Promise.reject(error);
})