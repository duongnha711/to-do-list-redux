import React, { Fragment, useEffect } from "react";
import useStyles from "./style";
import { Grid, CssBaseline, Typography, Box } from "@material-ui/core";
import SearchBar from "./components/SearchBar/SearchBar";
import TaskModal from "./modules/TaskModal/TaskModal";
import TaskTable from "./modules/Table/TaskTable";
import SortStatus from "./modules/SortTask/SortStatus/SortStatus";
import SortLabel from "./modules/SortTask/SortLabel/SortLabel";
import SortPriority from "./modules/SortTask/SortPriority/SortPriority";
import SortName from "./modules/SortTask/SortName/SortName";

import { useDebouncedCallback } from "use-debounce";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import * as Actions from "./redux/actions/taskAction";
function ToDoListRedux(props) {
  const classes = useStyles();
  const { keyWord, listTasks } = props;
  //dispatch
  const { searchNameTask } = props;

  //debounce keyWord
  const [debouncedCallback] = useDebouncedCallback((value) => {
    //dispatch keyWord
    searchNameTask(value);
  }, 300);

  useEffect(() => {
    searchNameTask(keyWord);
  }, [listTasks, keyWord, searchNameTask]);

  //warning thôi -> nhớ detele
  useEffect(() => {
    toast.error("Chưa responsive", { autoClose: 10000 });
    toast.error("Chưa customize confirm - detele", { autoClose: 10000 });
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      {/* Header inline */}
      <Box component="div">
        <Grid container>
          <Grid
            alignItems="center"
            className={classes.leftHeader}
            container
            item
            xs={3}
          >
            <Typography style={{ color: "white" }} variant="h3">
              Dương Nhã
            </Typography>
          </Grid>
          <Grid className={classes.rightHeader} item xs={9}>
            <Grid container spacing={1}>
              <Grid alignItems="center" container item xs={6}>
                <Typography style={{ color: "white" }} variant="h3">
                  Tasks List Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {/* SearchBar */}
                <SearchBar
                  onChange={(e) => {
                    debouncedCallback(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* //Sort + Table */}
      <Box marginY={1} component="div">
        <Grid container>
          <Grid style={{ padding: "0px 20px" }} item xs={3}>
            {/* TaskModal */}

            <TaskModal />

            {/* Sort Status */}
            <Box marginTop={1}>
              <SortStatus />
            </Box>
            {/* Sort Label */}
            <Box marginTop={1}>
              <SortLabel />
            </Box>
            {/* SortPriority */}
            <Box marginTop={1}>
              <SortPriority />
            </Box>
            {/* Sort Name */}
            <Box marginTop={1}>
              <SortName />
            </Box>
          </Grid>

          <Grid style={{ padding: "0px 20px" }} item xs={9}>
            {/* Table */}
            <TaskTable />
          </Grid>
        </Grid>
      </Box>
      <ToastContainer autoClose={3000} />
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    keyWord: state.taskReducer.keyWord,
    listTasks: state.taskReducer.listTasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchNameTask: (keyWord) =>
      dispatch(Actions.searchNameTaskAction(keyWord)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListRedux);
