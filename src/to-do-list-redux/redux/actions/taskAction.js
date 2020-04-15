import * as ActionType from "./../constants/ActionType";

export const saveTaskAction = (task) => {
  return {
    type: ActionType.SAVE_TASK,
    task,
  };
};

export const deleteTaskAction = (id) => {
  return {
    type: ActionType.DELETE_TASK,
    id,
  };
};

export const closeModal = () => {
  return {
    type: ActionType.CLOSE_MODAL,
  };
};

export const openModal = () => {
  return {
    type: ActionType.OPEN_MODAL,
  };
};

export const editTaskAction = (taskEdit) => {
  return {
    type: ActionType.EDIT_TASK,
    taskEdit,
  };
};

export const clickButttonAddAction = () => {
  return {
    type: ActionType.CLICK_BUTTON_ADD,
  };
};
