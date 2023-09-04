import { useState, useEffect } from "react";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import Container from "@mui/material/Container";
import ConfirmPassword from './ConfirmPassword'
import { makeStyles } from "@mui/styles";
import axios from "axios";
import ErrorModalJS from './modals/ErrorModalJS'
import SuccessModalJS from "./modals/SuccessModalJS";
import UseModal from "./Modal/Usemodal";
import Backdrop from '../navigation/Backdrop';
import { useNavigate } from "react-router-dom";


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
        padding: '2.5vw'
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
        background: 'lightgrey',
        borderRadius: '10px'
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

interface SignUpProps {
    name?: string;
    Password?: string;
    prevState?: null;
    id?: string;
    placeholder?: string;
    toUppercase?: string;
    e?: any
    value?: string
    user?: UserType
    hide?: boolean
    header?: string
    content?: string
    footer?: string
    props?: any
}

interface FormData {
    name: string;
    Password: string;
    length: number
    // prevState: null;
    // id: string;
    // placeholder: string;
    // toUppercase: string;
    // e: any
    // value: string
  }

type UserType = {
    userName: string
    email: string
    password: string
}

const SignUpForm: React.FC<SignUpProps> = (props: SignUpProps): JSX.Element => {

    const { show: show, toggle: _toggleOpen } = UseModal();
    // const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)

    const [modals, setModals] = useState(0);

    const classes = useStyles();

    const [username, setUserName] = useState<FormData | null>(null);
    const [password, setPassword] = useState<FormData | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<FormData | null>(null);
    const [email, setEmail] = useState<FormData | null>(null);
    const [userData, setUserData] = useState<any[]>([])
    const [errorModalHeader, setErrorModalHeader] = useState<string | null>(null);
    const [errorModalContent, setErrorModalContent] = useState<string | null>(null);
    // const formData = [name, password, email]
    // const username = name

    // const [error, setError] = useState(true)

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

// CHECK IF EMAIL ALREADY EXISTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // check if email already exists
      const checkCredentials = (username, email) => {
        const userByUsername = userData.find(user => user.username === username);
        const userByEmail = userData.find(user => user.email === email);
      
        if (userByUsername || userByEmail) {
          console.log('User already exists'); //works but still wrong modal
          
          if (userByUsername) {
            // Username already exists
            setModals(2);
            console.log('Username already exists');
          }
          
          if (userByEmail) {
            // Email already exists
            setModals(2);
            console.log('Email already exists'); //works but still wrong modal
          }
          
          return false; // User already exists, return false.
        } else {
          console.log('User not found');
          // setModal(3); // You can set a modal for "User not found" if needed.
          return true; // User not found, can proceed.
        }
      };

      //check if username already exists

    const NameInputHandler = (e) => {
        setUserName(e.currentTarget.value)
        // console.log({ name })
    }

    const PasswordInputHandler = (e) => {
        setPassword(e.currentTarget.value)
        // console.log({ Password })
    }

    const ConfirmPasswordInputHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
        // console.log({ Password })
    }

    const EmailInputHandler = (e) => {
        setEmail(e.currentTarget.value)
        // console.log({ Password })
    }

    const handleModalClose = () => {
        setModals(0);
        console.log('Close Clicked')
    }


    const submitHandler = async (e) => {

        e.preventDefault()
        const connString: any = process.env.REACT_APP_BACKEND_URL
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        checkCredentials(username, email)
        //HASH PASSWORD HERE!!
        
        if (username === null) { //Check username completed
            setErrorModalHeader('No Username')
            setErrorModalContent('Please enter a username.')
            setModals(2)
            return
          } 
          if (username.length < 5) { //Check username length
            setErrorModalHeader('Username is too short')
            setErrorModalContent('Please enter a username with more than 5 characters.')
            setModals(2)
            return
          } 
          if (email === null) { //Check email completed
            setErrorModalHeader('No Email Address')
            setErrorModalContent('Please enter your email address.')
            setModals(2)
            return
          } 
          if (regEx.test(String(email)) === true) { //Check email is valid
            setModals(1)
          } else {
            setErrorModalHeader('Not an email address.')
            setErrorModalContent('Please enter a valid email address.')
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
          if (confirmPassword === null) { //Check confirmPassword completed
            setErrorModalHeader('Password needs to be confirmed')
            setErrorModalContent('Please confirm your password.')
            setModals(2)
            return
          } 

          
        try {
            if (password === confirmPassword) { //Check passwords match
                const data = { username, password, email }
                const response = axios.post(connString + '/users', data)
                    .then((response) => {
                        // console.log(response)
                        // console.log(username)
                    }).catch(err => console.log(err))
                setModals(1)
                console.log('Success')
                // navigate('/pages/signin')
            } else {
                setModals(2)
                setErrorModalHeader('Paswwords Do Not Match')
                setErrorModalContent('Which one do you want? They are different')
                console.log('Error')
            }
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
                        content="Your account has been created, Please use these credentials to log in"
                        onClick={handleModalClose}
                        navTo = '/pages/Signin'
                    />
                </>
            }

            <div className={classes.main}>
                <h4>Register Here</h4>
                <UsernameInput onChange={NameInputHandler} />
                <EmailInput onChange={EmailInputHandler} />
                <PasswordInput onChange={PasswordInputHandler} />
                <ConfirmPassword onChange={ConfirmPasswordInputHandler} />
                <button onClick={submitHandler} type='button'>
                    Register
                </button>
            </div>
        </Container>
    );
};

export default SignUpForm;
