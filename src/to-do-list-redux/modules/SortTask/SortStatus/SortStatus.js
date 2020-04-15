import React from "react";
import { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

export default function SortStatus() {
  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Sort by Status</b>
      </Typography>
      <Grid style={{ cursor: "pointer" }} container>
        <WorkOutlineIcon style={{ fontSize: 16, marginRight: 5 }} /> All status
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <HourglassEmptyIcon style={{ fontSize: 16, marginRight: 5 }} /> In
        progress
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <AccessAlarmsIcon style={{ fontSize: 16, marginRight: 5 }} /> Not stated
        yet
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <CheckBoxOutlinedIcon style={{ fontSize: 16, marginRight: 5 }} /> Finish
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <DeleteForeverOutlinedIcon style={{ fontSize: 16, marginRight: 5 }} />{" "}
        Cancel
      </Grid>
    </Fragment>
  );
}
