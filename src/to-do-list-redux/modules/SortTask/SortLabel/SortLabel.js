import React from "react";
import { Fragment } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { connect } from "react-redux";
import * as Actions from "./../../../redux/actions/taskAction";

function SortLabel(props) {
  const { dispatch } = props;

  const handleClick = (value) => {
    const valueFilter = {
      by: "labelTask",
      value,
    };
    dispatch(Actions.filterTaskAction(valueFilter));
  };

  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Filter by Label</b>
      </Typography>
      <Box
        onClick={() => {
          handleClick(0);
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
      >
        All label
      </Box>

      <Grid
        onClick={() => {
          handleClick("FE");
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <FiberManualRecordIcon
          style={{ fontSize: 16, marginRight: 5, color: "blue" }}
        />{" "}
        Front-end
      </Grid>

      <Grid
        onClick={() => {
          handleClick("BE");
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <FiberManualRecordIcon
          style={{ fontSize: 16, marginRight: 5, color: "yellow" }}
        />{" "}
        Back-end
      </Grid>

      <Grid
        onClick={() => {
          handleClick("FT");
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <FiberManualRecordIcon
          style={{ fontSize: 16, marginRight: 5, color: "green" }}
        />{" "}
        Full-stack
      </Grid>

      <Grid
        onClick={() => {
          handleClick("DB");
        }}
        style={{ cursor: "pointer", marginTop: 5 }}
        container
      >
        <FiberManualRecordIcon
          style={{ fontSize: 16, marginRight: 5, color: "red" }}
        />{" "}
        Database
      </Grid>
    </Fragment>
  );
}

export default connect()(SortLabel);
