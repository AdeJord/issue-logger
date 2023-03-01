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
    placeholder: string;
    toUppercase: string;
    e: any
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
    alert(`You have just submitted:- Reg - ${regNo}: Issue - ${issue}`)
  }

  return (
    <div>
      <form>
      <h1>Issue Logger</h1>
      <h4>Registration Number</h4>
      <RegInput onChange={RegInputHandler} />
      <IssueInput onChange={IssueInputHandler} />
      <button onClick={submitHandler} type='submit'>
        Submit
      </button>
      </form>
    </div>
  );
};

export default Form;
