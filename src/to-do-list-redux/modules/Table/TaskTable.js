import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Select, FormControl, Grid, Tooltip } from "@material-ui/core";
import { connect } from "react-redux";
import * as Actions from "./../../redux/actions/taskAction";
import {
  renderStatus,
  renderPriority,
  renderLabel,
  renderPeople,
} from "./../handler";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TaskTable(props) {
  const classes = useStyles();

  //props
  const { searchTaskList } = props;
  //dispatch
  const { deleteTask, openModal, editTask, changeStatus } = props;

  const handleEditTask = (taskEdit) => {
    openModal();
    editTask(taskEdit);
  };

  const renderTask = () => {
    if (Array.isArray(searchTaskList) && searchTaskList.length > 0) {
      return searchTaskList.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{item.nameTask}</TableCell>
            <TableCell align="center">{renderLabel(item.labelTask)}</TableCell>
            <TableCell align="center">
              {renderPriority(item.priorityTask)}
            </TableCell>
            <TableCell align="center">
              <Grid justify="center" container>
                {renderPeople(item.personTask)}
              </Grid>
            </TableCell>
            <TableCell align="center">
              <Button
                style={{ padding: "7px 24px", marginRight: 5 }}
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleEditTask(item);
                }}
              >
                Edit
              </Button>
              <Tooltip title="Change status of task">
                <FormControl size="small">
                  <Select
                    value={item.statusTask}
                    variant="outlined"
                    native
                    color="secondary"
                    onChange={(e) => {
                      handleChangeStatus(e, item.id);
                    }}
                  >
                    <option value={1}>In progress</option>
                    <option value={2}>Not started yet</option>
                    <option value={3}>Finish</option>
                    <option value={4}>Cancel</option>
                  </Select>
                </FormControl>
              </Tooltip>
              <Button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  )
                    handleDeleteTask(item.id);
                }}
                style={{ padding: "7px 24px", marginLeft: 5 }}
                variant="outlined"
                color="secondary"
              >
                DELETE
              </Button>
            </TableCell>
            <TableCell align="center">
              {renderStatus(item.statusTask)}
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleChangeStatus = (e, id) => {
    const { value } = e.target;
    const data = { id, value };
    changeStatus(data);
  };



  return (
    <TableContainer
      style={{
        overflowX: "hidden",
        borderTop: "1px solid rgba(224, 224, 224, 1)",
      }}
      component={Paper}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="center">
              <b>No.</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Task Name</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Label</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Priority</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Person in chart</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Action</b>
            </TableCell>
            <TableCell component="th" align="center">
              <b>Status</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTask()}</TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    searchTaskList: state.taskReducer.searchTaskList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(Actions.deleteTaskAction(id)),
    openModal: () => dispatch(Actions.openModal()),
    editTask: (taskEdit) => dispatch(Actions.editTaskAction(taskEdit)),
    changeStatus: (data) => dispatch(Actions.changeStatusAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
