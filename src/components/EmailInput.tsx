import React from "react";
import { TextField } from "@mui/material";

import "../App.css";

const EmailInput = ( {onChange}, props: any) => {

  return (
    <div>
      <TextField 
      margin="normal"
      variant="standard"
      multiline={false} 
      fullWidth={true}
      rows={props.rows}
      onChange={onChange}
      placeholder='Enter email address here'
      />
    </div>
  );
};

export default EmailInput;
