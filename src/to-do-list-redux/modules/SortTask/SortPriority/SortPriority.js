import React from "react";
import { Fragment } from "react";
import { Typography, FormControl, Select } from "@material-ui/core";

export default function SortPriority() {
  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Sort by Priority</b>
      </Typography>
      <FormControl fullWidth size="small">
        <Select native variant="outlined">
          <option value={-1}>All Task</option>
          <option value={1}>High</option>
          <option value={2}>Normal</option>
          <option value={3}>Low</option>
        </Select>
      </FormControl>
    </Fragment>
  );
}
