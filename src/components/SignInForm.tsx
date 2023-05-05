import { useState } from "react";
import { Link } from 'react-router-dom'
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import SignUp from "../pages/SignUp";
import { useStyles } from "../styles";


declare var sendRequest: any

const SignInForm = () => {
  const classes = useStyles();

  interface FormData {
    name: string;
    Password: string;
    prevState: null;
    id: string;
    placeholder: string;
    toUppercase: string;
    e: any
    value: string
  }

  const [name, setname] = useState<FormData | null>(null);
  const [Password, setPassword] = useState<FormData | null>(null);
  const formData = [name, Password]

  const NameInputHandler = (e) => {
    setname(e.currentTarget.value)
    // console.log({ name })
  }

  const PasswordInputHandler = (e) => {
    setPassword(e.currentTarget.value)
    // console.log({ Password })
  }

  const submitHandler = async (e) => {

    // e.preventDefault()

    const connString: any = process.env.REACT_APP_BACKEND_URL

    try {
      // alert(`You have just submitted:- Reg - ${name}: Password - ${Password}`)
      // console.log(`You have just submitted:- Reg - ${name}: Password - ${Password}`)
      const data = { name, Password }
      const response = axios.post(connString + '/Passwords', data)
        .then((response) => {
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
      <div className={classes.main}>
        <form>
          <h4>Login</h4>
          <UsernameInput onChange={NameInputHandler} />
          <PasswordInput onChange={PasswordInputHandler} />
          <button onClick={submitHandler} type='submit'>
            Log In
          </button>
        </form>
        <button style={{ marginTop: '25px'}}>
          <Link to='/SignUp'>
            Or Register HERE
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default SignInForm;
