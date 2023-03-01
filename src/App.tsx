import "./App.css";
import React, { useState } from "react";
// The below import was auto imported when I added <Container>
// import { Container } from "@mui/system";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import RegInput from "./components/RegInput";
import IssueInput from "./components/IssueInput";
import Form from "./components/Form";

const useStyles = makeStyles({
  root: {
    height: "auto",
    padding: "10px",
    textAlign: "center",
    flexDirection: "column",
  },
  container: {
    height: "auto",
    width: "100vw",
    display: "flex",
    textAlign: "center",
    padding: '25px'
  },
  header: {
    fontSize: "6vw",
    textAlign: "center",
    paddingBottom: "5px",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    padding: "25px",
  },
  button: {
    marginTop: "115px",
    fontSize: "17px",
  },
  text: {
    height: "auto",
    fontSize: "15px",
  },
});

function App() {

  const classes = useStyles();
  return (

    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth="sm"
    >
      <Form />
    </Container>

  );
}

export default App;
