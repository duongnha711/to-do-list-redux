import React from "react";
import { Fragment } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function SortLabel() {
  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Sort by Label</b>
      </Typography>
      <Box>All label</Box>

      <Grid style={{ cursor: "pointer" }} container>
        <FiberManualRecordIcon style={{ fontSize: 16, marginRight: 5, color: "blue" }} />{" "}
        Front-end
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <FiberManualRecordIcon style={{ fontSize: 16, marginRight: 5, color: "yellow" }} />{" "}
        Back-end
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <FiberManualRecordIcon style={{ fontSize: 16, marginRight: 5, color: "green" }} />{" "}
        Full-stack
      </Grid>

      <Grid style={{ cursor: "pointer" }} container>
        <FiberManualRecordIcon style={{ fontSize: 16, marginRight: 5, color: "red" }} />{" "}
        Database
      </Grid>
    </Fragment>
  );
}
