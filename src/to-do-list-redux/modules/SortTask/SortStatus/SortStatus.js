import React from "react";
import { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import { connect } from "react-redux";
import * as Actions from "./../../../redux/actions/taskAction";

function SortStatus(props) {
  const { dispatch } = props;

  const handleOnClick = (value) => {
    const valueFilter = {
      by: "statusTask",
      value,
    };
    dispatch(Actions.filterTaskAction(valueFilter));
  };

  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Filter by Status</b>
      </Typography>
      <Grid
        onClick={() => {
          handleOnClick(0);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <WorkOutlineIcon style={{ fontSize: 16, marginRight: 5 }} /> All status
      </Grid>

      <Grid
        onClick={() => {
          handleOnClick(1);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <HourglassEmptyIcon style={{ fontSize: 16, marginRight: 5 }} /> In
        progress
      </Grid>

      <Grid
        onClick={() => {
          handleOnClick(2);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <AccessAlarmsIcon style={{ fontSize: 16, marginRight: 5 }} /> Not stated
        yet
      </Grid>

      <Grid
        onClick={() => {
          handleOnClick(3);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <CheckBoxOutlinedIcon style={{ fontSize: 16, marginRight: 5 }} /> Finish
      </Grid>

      <Grid
        onClick={() => {
          handleOnClick(4);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <DeleteForeverOutlinedIcon style={{ fontSize: 16, marginRight: 5 }} />{" "}
        Cancel
      </Grid>
    </Fragment>
  );
}

export default connect()(SortStatus);
