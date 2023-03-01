import React from "react";
import { TextField } from "@mui/material";

import "../App.css";

const IssueInput = ( {onChange}, props: any) => {

  return (
    <div>
      <TextField 
      margin="normal"
      variant="standard"
      multiline={true} 
      fullWidth={true}
      rows={props.rows}
      onChange={onChange}
      />
    </div>
  );
};

export default IssueInput;
