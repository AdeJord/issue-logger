import React from 'react'
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import Form from '../components/Form'

const useStyles = makeStyles({
  container: {
    height: "auto",
    width: "100vw",
    display: "flex",
    textAlign: "center",
    padding: '90px'
  },
})

const LogIssue = () => {

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div>
        <Form />
      </div>
    </Container>
  )
}

export default LogIssue