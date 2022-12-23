import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login.jsx";
import Series from "./components/Series.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/series" element={<Series />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
