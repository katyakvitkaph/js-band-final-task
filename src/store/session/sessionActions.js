export const ActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    
    LOGOUT: 'LOGOUT',
    LOGIN_USERNAME: 'LOGIN_USERNAME',
    CLEAR_ERROR_MESSAGE: 'CLEAR_ERROR_MESSAGE',

    UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_ERROR: 'UPDATE_USER_ERROR',
  };


  export const loginRequest = () => ({
    type: ActionTypes.LOGIN_REQUEST,
  });
  
  export const loginSuccess = response => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: response,
  });
  
  export const loginError = error => ({
    type: ActionTypes.LOGIN_ERROR,
    payload: error,
  });
  

  export const logout =() => ({
    type: ActionTypes.LOGOUT,
  });
  
  
  export const clearErrorMessage = () => ({
    type: ActionTypes.CLEAR_ERROR_MESSAGE,
  });
  

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
  
