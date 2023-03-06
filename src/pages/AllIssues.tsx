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

const AllIssues = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            AllIssues
        </Container>
    )
}

export default AllIssues