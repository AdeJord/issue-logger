import React from 'react'
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import SignInForm from '../components/SignInForm'

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
            <SignInForm />
        </Container>
    )
}

export default SignIn