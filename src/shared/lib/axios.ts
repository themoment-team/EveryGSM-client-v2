import axios from 'axios';

import { COOKIE_KEYS } from '@/shared/constants';
import { deleteCookie, getCookie } from '@/shared/utils';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '/',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window !== 'undefined' && !config.headers.Authorization) {
      const accessToken = getCookie(COOKIE_KEYS.ACCESS_TOKEN);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  async (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  async (error) => {
    if (typeof window !== 'undefined' && error?.response?.status === 401) {
      deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);

      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }

    return Promise.reject(error?.response?.data ?? error);
  },
);
