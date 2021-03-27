export const ActionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

export const isOpenModal = () => ({ type: ActionTypes.OPEN_MODAL });

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL,
});
