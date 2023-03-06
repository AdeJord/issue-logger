import React from 'react'
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles({
    container: {
      height: "auto",
      width: "100vw",
      display: "flex",
      textAlign: "center",
      padding: '90px'
    },
  })

const SignIn = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            Sign In
        </Container>
    )
}

export default SignIn