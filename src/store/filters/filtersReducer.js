import { ActionTypes } from './filtersActions';
import constants from '../../constants/filters';

const initialState = {
  title: '',
  price: constants.DEFAULT,
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_BY_NAME:
      return { ...state, title: payload };
    case ActionTypes.FILTER_PRICE:
      return { ...state, price: payload };
    default:
      return state;
  }
};

export default filters;
