import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./components/Form";
import MainNavigation from "./navigation/MainNavigation";
import AllIssues from "./pages/AllIssues";
import SignIn from "./pages/SignIn";

import "./App.css";

function App() {

  return (
    <>
    <BrowserRouter>
    <MainNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/LogIssue' element={<Form />} />
        <Route path='/pages/AllIssues' element={<AllIssues />} />
        <Route path='/pages/SignIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
