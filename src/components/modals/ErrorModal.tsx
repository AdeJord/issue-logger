import ReactDOM from "react-dom";
import { MouseEvent } from 'react'
import { makeStyles } from "@mui/styles"
import Button from "./Button";

interface Modal {
    props?: any
    header?: string
    content?: string
    footer?: string
    onClick?: MouseEvent<HTMLButtonElement>
}


const useStyles = makeStyles({
    // modalBackdrop: {
    //     width: 'auto',
    //     height: 'auto',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     zIndex: '1'
    // },
    modalRoot: {
        borderRadius: '10px',
        position: 'fixed',
        padding: '10px',
        top: '30%',
        left: '25%',
        width: '50vw',
        height: 'auto',
        background: 'red',
        zIndex: '1'
    },
    modalHeader: {
        textAlign: 'center',
        fontSize: 'large'
    },
    modalContent: {
        borderRadius: '3px',
        textAlign: 'center',
        fontSize: 'large',
        background: 'white'
    },
    modalFooter: {
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: 'large'
    }
})

const ErrorModal: React.FC<Modal> = (props: Modal) => {
    const classes = useStyles()

    const content = (
        <div>
            <div className={classes.modalRoot}>
                <div className={classes.modalHeader}>
                    <h3>{props.header}</h3>
                </div>
                <div className={classes.modalContent}>
                    {props.content}
                </div>
                <div className={classes.modalFooter}>
                    {/* <Button
                        onClick={props.onClick}
                        text='CLOSE' /> */}
                        TRY AGAIN
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById('modal-hook')!)

}

export default ErrorModal