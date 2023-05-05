import React from 'react'
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import SignUpForm from '../components/SignUpForm'

const useStyles = makeStyles({
    container: {
      height: "auto",
      width: "100vw",
      display: "flex",
      textAlign: "center",
      padding: '90px'
    },
  })

const SignUp = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            Sign Up
            <SignUpForm />
        </Container>
    )
}

export default SignUp