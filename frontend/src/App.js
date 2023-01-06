import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Client/Navbar/Navbar.jsx";
import Home from "./components/Client/Home/Home.jsx";
import Login from "./components/Client/Login/Login.jsx";
import Series from "./components/Client/Series/Series.jsx";
import Footer from "./components/Client/Footer/Footer.jsx";
import Register from "./components/Client/Register/Register.jsx";
import Resetpassword from "./components/Client/ResetPassword/Resetpassword.jsx";
import Movierent from "./components/Client/Movierent/Movierent.jsx";
import Userpage from "./components/Client/Userpage/Userpage.jsx";
import Informationuser from "./components/Client/InformationUser/Informationuser.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/resetpassword" element={<Resetpassword />}></Route>
        <Route path="/movierent" element={<Movierent />}></Route>
        <Route path="/userpage" element={<Userpage />}></Route>
        <Route path="/informationuser" element={<Informationuser />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
