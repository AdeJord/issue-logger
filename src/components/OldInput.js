import React from "react";
import { TextField, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "white",
    width: "35vw",
  },
}));

const Input = (props) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        variant="filled"
        InputProps={{ className: classes.input }}
        rows={props.rows}
        className={classes.textField}
        placeholder={props.placeholder}
        size={props.size}
        multiline={true}
      />
    </>
  );
};

export default Input;
