import React from "react";
import { Fragment } from "react";
import { Typography, FormControl, Select } from "@material-ui/core";

import { connect } from "react-redux";
import * as Actions from "../../../redux/actions/taskAction";

function FilterPriority(props) {
  const { filter } = props;
  const { dispatch } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    const filterValue = {
      by: "priorityTask",
      value: parseInt(value),
    };
    dispatch(Actions.filterTaskAction(filterValue));
  };

  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Filter by Priority</b>
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          value={filter.value&&filter.by==="priorityTask" ? filter.value : 0}
          onChange={handleChange}
          native
          variant="outlined"
        >
          <option value={0}>Choose one option</option>
          <option value={1}>High</option>
          <option value={2}>Normal</option>
          <option value={3}>Low</option>
        </Select>
      </FormControl>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.taskReducer.filter,
  };
};

export default connect(mapStateToProps)(FilterPriority);
