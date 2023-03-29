import React from 'react'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    footer: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        right: '0',
        textAlign: 'center',
    }
})

const Footer = () => {

const classes = useStyles()

  return (
    <div className={classes.footer}>
        <small>Issue Logger created by Ade</small>
        </div>
  )
}

export default Footer