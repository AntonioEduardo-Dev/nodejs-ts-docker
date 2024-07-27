import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'URL_BASE_DA_API_EXTERNA',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;
