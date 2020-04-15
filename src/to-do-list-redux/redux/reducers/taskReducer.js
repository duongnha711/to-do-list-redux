const localStorageTask = localStorage.getItem("listTasks")
  ? JSON.parse(localStorage.getItem("listTasks"))
  : [];

const initialState = {
  listTasks: localStorageTask, //[array]
};

const taskReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return { ...state };
  }
};

export default taskReducer;
