export const ActionTypes = {
    SEARCH_BY_NAME: 'SEARCH_BY_NAME',
    FILTER_PRICE: 'FILTER_PRICE',
  };
  
  export const setFilter = (type, value) => ({
    payload: value,
    type,
  });
  