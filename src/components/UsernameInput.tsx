import React from "react";
import { TextField } from "@mui/material";

import "../App.css";

const UsernameInput = ( {onChange}, props: any) => {

  return (
    <div>
      <TextField 
      margin="normal"
      variant="standard"
      multiline={false} 
      fullWidth={true}
      rows={props.rows}
      onChange={onChange}
      placeholder='Username'
      />
    </div>
  );
};

export default UsernameInput;
