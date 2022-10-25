/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getCookie } from 'shared/getCookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

axios.interceptors.request.use(
  async (config) => {
    const token = getCookie();

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      return axios(config);
    }
    return Promise.reject(error);
  }
);

function getApi(path: string, params?: any, apiURL?: string) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, {
    params,
  });
}

function postApi(path: string, data: any) {
  return axios.post(`${API_URL}/${path.replace(/^\//, '')}`, data);
}

const Api = {
  get: getApi,
  post: postApi,
};

export default Api;
