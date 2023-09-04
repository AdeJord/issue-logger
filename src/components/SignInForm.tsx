import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import Container from "@mui/material/Container";
import axios from "axios";
import { useStyles } from "../styles";
import { useNavigate } from "react-router-dom";
import Backdrop from '../navigation/Backdrop';
import ErrorModalJS from './modals/ErrorModalJS'
import SuccessModalJS from "./modals/SuccessModalJS";


declare var sendRequest: any

const SignInForm = () => {
  const classes = useStyles();

  interface FormData {
    name: string;
    Password: string;
    length: number;
    // prevState: null;
    // id: string;
    // placeholder: string;
    // toUppercase: string;
    // e: any
    // value: string
  }

  const navigate = useNavigate();
  const [name, setname] = useState<FormData | null>(null);
  const [password, setPassword] = useState<FormData | null>(null);
  const formData = [name, password]
  const [modals, setModals] = useState(0);
  const [userData, setUserData] = useState<any[]>([])
  const [errorModalHeader, setErrorModalHeader] = useState<string | null>(null);
  const [errorModalContent, setErrorModalContent] = useState<string | null>(null);
  const [validateUser, setValidateUser] = useState<any[]>([])


  useEffect(() => {
    const connString = process.env.REACT_APP_BACKEND_URL
    const fecthData = async () => {
      const response = await fetch(connString + '/users')
      console.log(connString)
      const data = await response.json();
      setUserData(data)
      console.log(userData)
    }
    fecthData()
      .catch(console.error)
  }, [])



  // validate user start
  const checkCredentials = (name, password) => {
    const user = userData.find(user => user.username === name);

    if (user && user.password === password) {
      console.log('Credentials Match')
      console.log(user.password)
      // setValidateUser(user)
      return user.password === password;
      // setModals(1)
    } else {
      console.log('user not found')
      // setModals(2)
    }
  }


  const isValidUser = checkCredentials(name, password);
  //NEED TO STORE THIS IN CONTEXT SO LOG ISSUE CAN USE IT
  console.log('isValidUser', isValidUser)

  //validate user end

  const handleModalClose = () => {
    setModals(0);
    console.log('Close Clicked')
  }

  const NameInputHandler = (e) => {

    setname(e.currentTarget.value)
    // console.log({ name })
  }

  const PasswordInputHandler = (e) => {
    setPassword(e.currentTarget.value)
    // console.log({ Password })
  }

  const submitHandler = async (e) => {

    e.preventDefault()



    if (name === null) { //Check username completed
      setErrorModalHeader('No Username')
      setErrorModalContent('Please enter a username.')
      setModals(2)
      return
    }
    if (name.length < 5) { //Check username length
      setErrorModalHeader('Username is too short')
      setErrorModalContent('Please enter a username with more than 5 characters.')
      setModals(2)
      return
    }
    if (password === null) { //Check password completed
      setErrorModalHeader('No Password')
      setErrorModalContent('Please enter a password.')
      setModals(2)
      return
    }
    if (password.length < 4) { //Check password length
      setErrorModalHeader('Password Too Short')
      setErrorModalContent('Please enter a password with at least 4 characters.')
      setModals(2)
      return
    }



    //NEED ANOTHER IF FOR IF HASHED PASSWORD IS INCORRECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    const connString: any = process.env.REACT_APP_BACKEND_URL

    try {
      const data = { name, Password: password }
      // const response = axios.post(connString + '/Passwords', data)
      //   .then((response) => {
      //     // console.log(response)
      //   }).catch(err => console.log(err))
      if (isValidUser) { //Check if user is valid and display Modal
        // setModals(1)

        if (isValidUser) { //Check if user is valid and display Modal
          setModals(1)
          setErrorModalHeader('Invalid Credentials')
          setErrorModalContent('Please enter a valid username and password.')
        }
      } else {
        setModals(2)
        setErrorModalHeader('Invalid Credentials')
        setErrorModalContent('Please enter a valid username and password.')
      }
    }
    catch (err) {
      setModals(2)
      console.log(err)
    }
  }

  return (
    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth="sm"
    >
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
      {modals === 1 &&
        <>
          {/* this needs to be a link */}
          <Backdrop onClick={handleModalClose} />
          <SuccessModalJS
            header="SUCCESS"
            content="You have successfully signed in. You can now log an issue."
            onClick={handleModalClose}
            navTo='/pages/LogIssue'
          />
        </>
      }
      <div className={classes.main}>
        <form>
          <h4>Login</h4>
          <UsernameInput onChange={NameInputHandler} />
          <PasswordInput onChange={PasswordInputHandler} />
          <button onClick={submitHandler} type='submit'>
            Log In
          </button>
        </form>
        <button style={{ marginTop: '25px' }}>
          <Link to='/SignUp'>
            Or Register HERE
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default SignInForm;
