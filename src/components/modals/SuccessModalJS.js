import ReactDOM from "react-dom";
import { makeStyles } from "@mui/styles";
import ButtonJS from "./ButtonJS";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  modalBackdrop: {
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignContent: "center",
    zIndex: "1",
  },
  modalRoot: {
    boxShadow: '5px 10px 35px 10px #7C7373',
    borderRadius: "10px",
    position: "fixed",
    padding: "10px",
    top: "30%",
    left: "24%",
    width: "50vw",
    height: "auto",
    background: "lightgreen",
    zIndex: "1",
  },
  modalHeader: {
    textAlign: "center",
    fontSize: "large",
  },
  modalContent: {
    borderRadius: "3px",
    textAlign: "center",
    fontSize: "large",
    background: "white",
    '@media (max-width: 768px)' : {
        fontSize: "small",
      }
  },
  modalFooter: {
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "large",
  },
});

const SuccessModal = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(props.navTo)
  }

  const content = (
    <div onClick={clickHandler}>
      <div className={classes.modalRoot}>
        <div className={classes.modalHeader}>
          <h3>{props.header}</h3>
        </div>
        <div className={classes.modalContent}>{props.content}</div>
        <div className={classes.modalFooter}>
          <ButtonJS onClick={clickHandler} 
          text="OK" />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default SuccessModal;
