import axios from 'axios';
import { setAuthToken } from './userApi';

axios.defaults.apiURL = 'https://js-band-store-api.glitch.me/';

export const getBooks = token => {
  setAuthToken(token);
  return axios.get('books');
};

export const getDetailBook = (token, id) => {
  setAuthToken(token);
  return axios.get(`books/${id}`);
};

export const purchaseBooks = (token, params) => {
  setAuthToken(token);
  return axios.post('purchase', params);
};
