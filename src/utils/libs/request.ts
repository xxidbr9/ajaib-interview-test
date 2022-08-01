import axios from 'axios';

const request = axios.create({
  baseURL: process.env.APP_BACKEND_URL || 'https://randomuser.me/api/',
});

export default request;
