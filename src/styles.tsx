import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
    mainHeader: {
      textAlign: 'center',
    },
    burgerButton: {
      display: "flex",
      flexDirection: "column",
      textAlign: 'right',
      alignContent: 'right',
      marginLeft: '20vw'
    },
    button: {
      marginTop: "115px",
      fontSize: "17px",
    },
    text: {
      height: "auto",
      fontSize: "15px",
    },
    links: {
      textDecoration: 'none'
    }
  });