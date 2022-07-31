import axios from 'axios';

const request = axios.create({
  baseURL: process.env.APP_BACKEND_URL,
});

export default request;
