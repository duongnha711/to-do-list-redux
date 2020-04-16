import * as ActionType from "./../constants/ActionType";
import randomstring from "randomstring";
import { findTaskIndex, clearAccents, sortTask } from "./../../modules/handler";
import { toast } from "react-toastify";

const localStorageTask = localStorage.getItem("listTasks")
  ? JSON.parse(localStorage.getItem("listTasks"))
  : [];

const initialState = {
  listTasks: localStorageTask, //[array]
  openModal: false,
  taskEdit: {},
  searchTaskList: localStorageTask, //[array]
  keyWord: "",
  sort: {},
  filter: {},
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
    case ActionType.SAVE_TASK: {
      const { task } = action;
      if (task.id) {
        //edit
        const index = findTaskIndex(state.listTasks, task.id);
        const newListTasks = [...state.listTasks];
        task.priorityTask = parseInt(task.priorityTask);
        newListTasks[index] = task;
        localStorage.setItem("listTasks", JSON.stringify(newListTasks));

        //
        toast.success("Edit Task Successfully");
        return {
          ...state,
          listTasks: newListTasks,
          sort: {},
          filter: {},
        };
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
        toast.success("Add Task Successfully");
        return {
          ...state,
          listTasks: [...state.listTasks, newTask],
          sort: {},
          filter: {},
        };
      }
    }
    //delete task
    case ActionType.DELETE_TASK: {
      const { id } = action;
      const { listTasks } = state;
      //delete by filter
      const newListTasks = listTasks.filter((item) => {
        return item.id !== id;
      });
      localStorage.setItem("listTasks", JSON.stringify(newListTasks));
      toast.warn("You have just deleted a task");
      return {
        ...state,
        listTasks: newListTasks,
        sort: {},
        filter: {},
      };
    }
    //edit task
    case ActionType.EDIT_TASK:
      return { ...state, taskEdit: action.taskEdit };

    //click button add:
    case ActionType.CLICK_BUTTON_ADD:
      return { ...state, taskEdit: {} };

    //change status
    case ActionType.CHANGE_STATUS: {
      const { id, value } = action.data;
      const index = findTaskIndex(state.listTasks, id);
      const newListTasks = [...state.listTasks];
      newListTasks[index].statusTask = parseInt(value);
      localStorage.setItem("listTasks", JSON.stringify(newListTasks));
      toast.success("Change Status Successfully");
      return { ...state, listTasks: newListTasks };
    }

    //search_name
    case ActionType.SEARCH_NAME_TASK:
      const { keyWord } = action;
      const newListTasks = state.listTasks.filter((item) => {
        return clearAccents(item.nameTask.toLowerCase()).includes(
          clearAccents(keyWord.toLowerCase().trim())
        );
      });
      return {
        ...state,
        searchTaskList: newListTasks,
        keyWord: action.keyWord,
      };

    //sort task
    case ActionType.SORT_TASK: {
      const { by, value } = action.valueSort;
      const newListTasks = sortTask([...state.listTasks], by, value);
      return {
        ...state,
        searchTaskList: newListTasks,
        sort: action.valueSort,
        filter: {},
      };
    }

    case ActionType.FILTER_TASK: {
      const { by, value } = action.valueFilter;
      //if value === 0 (all) -> return all data
      if (!value) {
        return {
          ...state,
          searchTaskList: state.listTasks,
          filter: action.valueFilter,
          sort: {},
        };
      }
      let newListTasks;
      if (by === "statusTask" || by === "priorityTask") {
        newListTasks = state.listTasks.filter((item) => {
          return item[by] === value;
        });
      }
      if (by === "labelTask") {
        newListTasks = state.listTasks.filter((item) => {
          return item[by].includes(value);
        });
      }
      return {
        ...state,
        searchTaskList: newListTasks,
        filter: action.valueFilter,
        sort: {},
      };
    }
    default:
      return { ...state };
  }
};

export default taskReducer;
