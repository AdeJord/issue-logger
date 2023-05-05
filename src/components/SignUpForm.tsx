import { useState } from "react";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import Container from "@mui/material/Container";
import ConfirmPassword from './ConfirmPassword'
import { makeStyles } from "@mui/styles";
import axios from "axios";
import ErrorModal from './ErrorModal'
import Modal from "./Modal/modal";
import UseModal from "./Modal/Usemodal";

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
}

type UserType = {
    userName: string
    email: string
    password: string
}

const SignUpForm: React.FC<SignUpProps> = (): JSX.Element => {

    const { show: show, toggle: _toggleOpen } = UseModal();
    const [ showModal, setShowModal ] = useState(false)

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
    
    const submitHandler = async (e) => {

        e.preventDefault()
        const connString: any = process.env.REACT_APP_BACKEND_URL

        //NEED TO CHECK ALL FIELDS ARE COMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        try {
            if (password === confirmPassword) {
                //need to stop send if passwords no NOT match
                console.log('correct')
                const data = { username, password, email }
                const response = axios.post(connString + '/users', data)
                    .then((response) => {
                        console.log(response)
                        console.log(username)
                    }).catch(err => console.log(err))
            } else {
                //THIS BIT WORKS.. NEED TO ADD MODAL SAYING PASSWORDS DONT MATCH! 
                _toggleOpen()
                setShowModal(true)
                // setError(true)
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
            <Modal
                show={show}
                hide={_toggleOpen}
                title="Passwords do not match."
                content="Which one do you want?  They are both different!  Try again..."
            />

            <div className={classes.main}>
                <form>
                    <h4>Register Here</h4>
                    <UsernameInput onChange={NameInputHandler} />
                    <EmailInput onChange={EmailInputHandler} />
                    <PasswordInput onChange={PasswordInputHandler} />
                    <ConfirmPassword onChange={ConfirmPasswordInputHandler} />
                    <button onClick={submitHandler} type='submit'>
                        Register
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default SignUpForm;
