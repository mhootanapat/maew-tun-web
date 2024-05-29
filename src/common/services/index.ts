import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const axiosInstance = axios.create({
  baseURL: `${publicRuntimeConfig.NEXT_BASE_API_URL}` || '',
});

export default axiosInstance;
