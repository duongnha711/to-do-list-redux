import React from "react";
import { Fragment } from "react";
import { Typography, FormControl, Select } from "@material-ui/core";
import { connect } from "react-redux";
import * as Actions from "./../../../redux/actions/taskAction";

function SortName(props) {
  const { dispatch, sort } = props;

  const handleOnChange = (e) => {
    const { value } = e.target;
    const valueSort = {
      by: "nameTask",
      value: parseInt(value),
    };
    dispatch(Actions.sortTaskAction(valueSort));
  };

  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Sort by Name</b>
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          value={sort.value && sort.by === "nameTask" ? sort.value : 0}
          onChange={handleOnChange}
          native
          variant="outlined"
        >
          <option value={0}>Choose one option</option>
          <option value={1}>Sort by Name A-Z</option>
          <option value={-1}>Sort by Name Z-A </option>
        </Select>
      </FormControl>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    sort: state.taskReducer.sort,
  };
};

export default connect(mapStateToProps)(SortName);
