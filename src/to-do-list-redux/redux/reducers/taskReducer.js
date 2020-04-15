import * as ActionType from "./../constants/ActionType";
import randomstring from "randomstring";
import { findTaskIndex } from "./../../modules/handler";

const localStorageTask = localStorage.getItem("listTasks")
  ? JSON.parse(localStorage.getItem("listTasks"))
  : [];

const initialState = {
  listTasks: localStorageTask, //[array]
  openModal: false,
  taskEdit: {},
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    //open Modal
    case ActionType.OPEN_MODAL:
      return { ...state, openModal: true };
    //close Modal
    case ActionType.CLOSE_MODAL:
      return { ...state, openModal: false };

    //save task
    case ActionType.SAVE_TASK:
      const { task } = action;
      if (task.id) {
        //edit
        const index = findTaskIndex(state.listTasks, task.id);
        const newListTasks = [...state.listTasks];
        task.priorityTask = parseInt(task.priorityTask);
        newListTasks[index] = task;
        localStorage.setItem("listTasks", JSON.stringify(newListTasks));
        return { ...state, listTasks: newListTasks };
      } else {
        //add
        const newTask = {
          ...task,
          id: randomstring.generate(24),
          statusTask: 2, //default: not started yet
          priorityTask: parseInt(task.priorityTask),
        };
        localStorage.setItem(
          "listTasks",
          JSON.stringify([...state.listTasks, newTask])
        );
        return { ...state, listTasks: [...state.listTasks, newTask] };
      }

    //delete task
    case ActionType.DELETE_TASK:
      const { id } = action;
      const { listTasks } = state;
      //delete by filter
      const newListTasks = listTasks.filter((item) => {
        return item.id !== id;
      });
      localStorage.setItem("listTasks", JSON.stringify(newListTasks));
      return { ...state, listTasks: newListTasks };

    //edit task
    case ActionType.EDIT_TASK:
      const { taskEdit } = action;
      return { ...state, taskEdit };

    //click button add:
    case ActionType.CLICK_BUTTON_ADD:
      return { ...state, taskEdit: {} };
    default:
      return { ...state };
  }
};

export default taskReducer;
