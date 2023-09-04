import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

import "../App.css";

  const useStyles = makeStyles({
    input: {
      color: "black",
      width: "100%",
      height: "5vh",
      borderRadius: "8px",
      fontSize: "28px",
      textAlign: "center",
      marginBottom: "20px",
      type: "password",
    },
  });


const UsernameInput = ({ onChange }, props: any) => {
  const classes = useStyles();



  return (
    <div>
      <input className={classes.input}
        // margin="normal"
        // variant="standard"
        // multiline={false} 
        // fullWidth={true}
        // rows={props.rows}
        onChange={onChange}
        placeholder='Username'
      />
    </div>
  );
};

export default UsernameInput;
