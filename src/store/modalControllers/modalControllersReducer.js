import { ActionTypes } from './modalControllersActions';

const modalOpen = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return true;
    case ActionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default modalOpen;
