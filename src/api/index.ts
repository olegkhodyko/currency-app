import axios from 'axios';
import Constants from '@utils/constants';

const api = axios.create({
  baseURL: 'https://api.fxratesapi.com',
  timeout: Constants.DefaultApiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
