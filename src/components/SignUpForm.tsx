import { useState, MouseEvent } from "react";
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

declare var sendRequest: any


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
    // const formData = [name, password, email]
    // const username = name

    // const [error, setError] = useState(true)

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

        //NEED TO CHECK ALL FIELDS ARE COMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        try {
            if (password === confirmPassword) {
                const data = { username, password, email }
                const response = axios.post(connString + '/users', data)
                    .then((response) => {
                        // console.log(response)
                        // console.log(username)
                    }).catch(err => console.log(err))
                setModals(1)
                console.log('Success')
            } else {
                setModals(2)
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
                        header="Passwords do not match."
                        content="Which one do you want?  They are both different!  Try again..."
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
