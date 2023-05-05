import React, { useEffect, useState } from 'react'
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    dipslay: 'flex',
    flexDirection: 'column',
    height: "auto",
    width: "auto",
    display: "flex",
    textAlign: "center",
    paddingTop: '70px'
  },
  container: {
    dipslay: 'flex',
    flexDirection: 'column',
    height: "auto",
    width: "auto",
    display: "flex",
    textAlign: "center",
  },
  tableMain: {
    height: "auto",
    width: "auto",
    border: '1px solid black',
    borderCollapse: 'collapse',
  },
  tableHead: {
    background: 'lightgray',
    border: '1px solid black'
  },
  tableData: {
    border: '1px solid black',
  },
  button: {
    marginTop: '25px'
  }
})


// declare types for tsx
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
    p?: string;
  }
}


const AllIssues = () => {

  const [issueData, setIssueData] = useState<any[]>([])

  const classes = useStyles()

  useEffect(() => {
    const connString = process.env.REACT_APP_BACKEND_URL as string
    const fecthData = async () => {
      const response = await fetch(connString + '/issues')
      console.log(connString)
      const data = await response.json();
      setIssueData(data)
      // console.log(issueData)
    }

    fecthData()
      .catch(console.error)
  }, [])

  return (
    <Container
      className={classes.root}
      disableGutters={true}
      maxWidth="sm"
    >

      <p>All Issues</p>
      <div className={classes.container}>
      <table className={classes.tableMain}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableHead} >Reg Number</th>
            <th className={classes.tableHead} >Issue</th>
          </tr>
        </thead>
        <tbody>
          {issueData.map((issue, key) =>
            <tr className={classes.tableData} key={key}>
              <td className={classes.tableData}>{issue.regno}</td>
              <td className={classes.tableData}>{issue.issue}</td>
            </tr>)}
        </tbody>
      </table>
      </div>
      <button className={classes.button} onClick={() => alert('This function has not yet been created!')}>Export to CSV</button>

    </Container>
  );
};

export default AllIssues