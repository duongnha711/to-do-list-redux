import React from "react";
import ToDoListRedux from "./to-do-list-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./to-do-list-redux/theme";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./to-do-list-redux/redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// import Test from "./tsttttttttttt";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToDoListRedux />
        {/* <Test /> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
