import { makeStyles } from "@mui/styles";

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

const RegInput = ({onChange}) => {
  const classes = useStyles();

  return (
      <input
      onChange={onChange}
        required
        className={classes.input}
        placeholder="Enter Reg"
      />

  );
};

export default RegInput;
