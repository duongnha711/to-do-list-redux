import React from "react";
import { OutlinedInput, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  return (
    <FormControl fullWidth size="small">
      <OutlinedInput
        style={{ backgroundColor: "white" }}
        color="secondary"
        size="small"
        endAdornment={<SearchIcon color="primary" />}
      />
    </FormControl>
  );
}
