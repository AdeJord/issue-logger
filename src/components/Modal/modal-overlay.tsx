import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '0%',
        left: '0%',
        width: '100vw',
        height: '100vh',
        zIndex: '1040',
        backgroundColor: 'lightgray'
    }
})

const ModalOverlay = ({ ...props }) => {

    const classes = useStyles()

    // console.log(JSON.stringify(props))

    return ReactDom.createPortal(
        <>
            <div className={classes.root}>{props.children}</div>
        </>,
        document.getElementById('modal-hook') as HTMLElement
    )
}

ModalOverlay.propTypes = {
    props: PropTypes.string
}

export default ModalOverlay