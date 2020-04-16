import React from "react";
import { OutlinedInput, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  return (
    <FormControl fullWidth size="small">
      <OutlinedInput
        style={{ backgroundColor: "white" }}
        color="secondary"
        size="small"
        endAdornment={<SearchIcon color="primary" />}
        {...props}
      />
    </FormControl>
  );
}
