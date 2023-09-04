import { useState } from "react";
import RegInput from "./RegInput";
import IssueInput from "./IssueInput";
import SuccessModal from "./modals/SuccessModalJS";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from '../navigation/Backdrop';
import ErrorModalJS from './modals/ErrorModalJS'


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
    padding: '95px'
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



const Form = () => {

  const navigate = useNavigate();

  const classes = useStyles();

  interface FormData {
    regNo: string;
    issue: string;
    prevState: null;
    id: string;
    placeholder: string;
    toUppercase: string;
    e: any
    value: string
  }

  const [regNo, setRegNo] = useState<FormData | null>(null);
  const [issue, setIssue] = useState<FormData | null>(null);
  const [showSuccesModal, setShowSuccesModal] = useState<boolean>(false);
  const [errorModalHeader, setErrorModalHeader] = useState<string | null>(null);
  const [errorModalContent, setErrorModalContent] = useState<string | null>(null);
  const [modals, setModals] = useState(0);


  const RegInputHandler = (e) => {
    setRegNo(e.currentTarget.value)
    // console.log({ regNo })
  }

  const IssueInputHandler = (e) => {
    setIssue(e.currentTarget.value)
    // console.log({ issue })
  }

  const successModalClickHandler = () => {  
  
    setShowSuccesModal(false)

    // setRegNo(null)
    // setIssue(null)  
  }

  const handleModalClose = () => {
    setModals(0);
    console.log('Close Clicked')
  }

  const submitHandler = async (e) => {

    (e).preventDefault()

    const connString: any = process.env.REACT_APP_BACKEND_URL

    console.log('hit')

    if (regNo === null) { //Check username completed
      setErrorModalHeader('No Reg Number')
      setErrorModalContent('Please enter a Reg Number.')
      setModals(2)
      return
    }

    if (issue === null) { //Check username completed
      setErrorModalHeader('No Issue eneter')
      setErrorModalContent('Please enter an issue')
      setModals(2)
      return
    }

    try {
      // alert(`You have just submitted:- Reg - ${regNo}: Issue - ${issue}`)
      // console.log(`You have just submitted:- Reg - ${regNo}: Issue - ${issue}`)
      setShowSuccesModal(true)
      const data = { regNo, issue }
      const response = axios.post(connString + '/issues', data)
        .then((response) => {
          // console.log(response)
          // console.log(response)
        }).catch(err => console.log(err))
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth="sm"
    >
      {showSuccesModal &&
        <SuccessModal 
        header='Thank you for your submission!'
        onClick={successModalClickHandler}
        navTo='../pages/AllIssues'/>
      }
            {modals === 2 &&
        <>
          <Backdrop onClick={handleModalClose} />
          <ErrorModalJS
            header={errorModalHeader}
            content={errorModalContent}
            onClick={handleModalClose}
          />
        </>
      }
      {}
      <form>
        <h4>Registration Number</h4>
        <RegInput onChange={RegInputHandler} />
        <IssueInput onChange={IssueInputHandler} />
        <button onClick={submitHandler} type='submit'>
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Form;
