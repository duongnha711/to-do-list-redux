import React, { Fragment } from "react";
import useStyles from "./style";
import { Grid, CssBaseline, Typography, Box } from "@material-ui/core";
import SearchBar from "./components/SearchBar/SearchBar";
import TaskModal from "./modules/TaskModal/TaskModal";
import TaskTable from "./modules/Table/TaskTable";
import SortStatus from "./modules/SortTask/SortStatus/SortStatus";
import SortLabel from "./modules/SortTask/SortLabel/SortLabel";
import SortPriority from "./modules/SortTask/SortPriority/SortPriority";
import SortName from "./modules/SortTask/SortName/SortName";

export default function ToDoListRedux(props) {
  const classes = useStyles();

  //data mau
  const tasks = [
    {
      id: 1,
      nameTask: "Hoc react redux",
      labelTask: [1,2, 4],
      priorityTask: 3,
      personTask: ["chopper", "sanji"],
      statusTask: 4,
    },
  ];

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
              Dương Hoàng Nhã
            </Typography>
          </Grid>
          <Grid className={classes.rightHeader} item xs={9}>
            <Grid container spacing={1}>
              <Grid alignItems="center" container item xs={6}>
                <Typography style={{ color: "white" }} variant="h3">
                  Task List Management
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {/* SearchBar */}
                <SearchBar />
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
    </Fragment>
  );
}
