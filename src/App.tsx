import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Form from "./components/Form";
import MainNavigation from "./navigation/MainNavigation";
import AllIssues from "./pages/AllIssues";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";

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
    <Footer />
    </>
  );

}

export default App;
