import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

import "../App.css";

const useStyles = makeStyles({
  input: {
    textTransform: "uppercase",
    color: "black",
    fontFamily: "Charles Wright",
    fontWeight: "700",
    background: "yellow",
    width: "160px",
    height: "5vh",
    borderRadius: "8px",
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
  },
});

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

const PasswordInput = ( {onChange}, props: any) => {
  const classes = useStyles();


  return (
    <div>
      <TextField 
      margin="normal"
      variant="standard"
      multiline={true} 
      fullWidth={true}
      rows={props.rows}
      onChange={onChange}
      placeholder='Password'
      type="password"
      />
    </div>
  );
};

export default PasswordInput;
