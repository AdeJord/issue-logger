import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Form from "./components/Form";
import MainNavigation from "./navigation/MainNavigation";
import AllIssues from "./pages/AllIssues";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Modal from './components/Modal/modal'
import useModal from "./components/Modal/Usemodal";

import "./App.css";

function App(props:any) {

  const { show: show, toggle: toggle } = useModal();


  return (
    <>
        <Modal
          show={show}
          hide={toggle}
          title="modal running"
          content="hello world!"
        >
        </Modal>
    <BrowserRouter>
    <MainNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/LogIssue' element={<Form />} />
        <Route path='/pages/AllIssues' element={<AllIssues />} />
        <Route path='/pages/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );

}

export default App;
