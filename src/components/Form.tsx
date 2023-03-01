import { useState } from "react";
import RegInput from "./RegInput";
import IssueInput from "./IssueInput";

//submit handler needed which will save all of the inputs into somewhere

const Form = () => {

  interface FormData {
    regNo: string;
    issue: string;
    prevState: null;
    id: string;
    placeholder: string
  }

  const [regNo, setRegNo] = useState<FormData | null>(null);
  const [issue, setIssue] = useState<FormData | null>(null);

  const RegInputHandler = (e) => {
    setRegNo(e.currentTarget.value)
    // console.log({ regNo })
  }

  const IssueInputHandler = (e) => {
    setIssue(e.currentTarget.value)
    // console.log({ issue })
  }

  const submitHandler = () => {
    console.log(`Reg - ${regNo}: Issue - ${issue}`)
  }

  return (
    <div>
      <h1>Issue Logger</h1>
      <h4>Registration Number</h4>
      <RegInput onChange={RegInputHandler} />
      <IssueInput onChange={IssueInputHandler} />
      <button onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Form;
