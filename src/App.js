import React, { Fragment } from "react";
import ToDoListRedux from "./to-do-list-redux";
import { ThemeProvider } from "@material-ui/core";
import theme from "./to-do-list-redux/theme";
import { createStore } from "redux";
import rootReducer from "./to-do-list-redux/redux/reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToDoListRedux />
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
