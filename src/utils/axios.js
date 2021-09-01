import axios from 'axios';
import apiConfig from '../config/apiConfig';

axios.interceptors.request.use(
  config => {
    const token = 'sdfjlsdjlkfkdskjflsdlkjf';

    config.baseURL = apiConfig.baseUrl;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    console.log('Error', error);
  },
);

export default axios;
