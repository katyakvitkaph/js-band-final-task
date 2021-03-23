import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-store-api.glitch.me/';

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = params => axios.post('signin', params);

