import React from "react";
import { Fragment } from "react";
import { Typography, FormControl, Select } from "@material-ui/core";

export default function SortName() {
  return (
    <Fragment>
      <Typography color="secondary" variant="h5">
        <b>Sort by Name</b>
      </Typography>
      <FormControl fullWidth size="small">
        <Select native variant="outlined">
          <option value={0}>All Task</option>
          <option value={1}>Sort by Name A-Z</option>
          <option value={-1}>Sort by Name Z-A </option>
        </Select>
      </FormControl>
    </Fragment>
  );
}
