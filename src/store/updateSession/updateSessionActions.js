export const ActionTypes = {
    UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_ERROR: 'UPDATE_USER_ERROR',
  };


  
  export const updateUserRequest = () => ({
    type: ActionTypes.UPDATE_USER_REQUEST,
  });
  
  export const updateUserSuccess = response => ({
    type: ActionTypes.UPDATE_USER_SUCCESS,
    payload: response,
  });
  
  export const updateUserError = error => ({
    type: ActionTypes.UPDATE_USER_ERROR,
    payload: error,
  });
  

  