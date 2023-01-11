import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Snackbar,
} from "@mui/material";

import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [openToast1, setOpenToast1] = useState(false);
  const [openToast2, setOpenToast2] = useState(false);
  const [openToast3, setOpenToast3] = useState(false);
  const [openToast4, setOpenToast4] = useState(false);
  const [openToast5, setOpenToast5] = useState(false);
  const [openToast6, setOpenToast6] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    } else {
      setOpenToast1(false);
      setOpenToast2(false);
      setOpenToast3(false);
      setOpenToast4(false);
      setOpenToast5(false);
      setOpenToast6(false);
    }
  };




  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if name is null return alert message
    if (username === "") {
      alert("Please enter your username");
    }

    // if password is null return alert message
    if (password === "") {
      alert("Please enter your password");
    }

    // if name and password are null
    if (username === "" && password === "") {
      alert("Please enter your username and password");
    }

    const data = {
      username: username,
      password: password,
    };

    // login, verify if name exist if not exist return alert message, if exist verify if password is correct if not return alert message, if password is correct return alert message and after 3sec navigate to home page and set isLogged to true
    axios.post("http://localhost:4243/api/users/auth", data).then((res) => {  
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      setTimeout(() => {
        navigate("/home");
        setIsLoggedIn(true);
      }, 3000);
    }
    )
    .catch((err) => {
      if (err.response.status === 401) {
        setErrorMessage(err.response.data);
        setOpenToast6(true);
      }
    });
  };

  if (isLoggedIn) {
    return navigate('/home');
  }

  return (
    <>
      <div className="formlogin">
        <section className="login">
          <div className="btns-login">
            <h2>Log In</h2>
          </div>
          <div className="container-lg">
            <form
              action="#"
              className="form-entrar ativo"
              method="post"
              id="entrar"
              onSubmit={handleSubmit}
            >
              <div className="username-field ct-input">
                <label htmlFor="usuario-entrar">Username</label>
                <input
                  type="text"
                  id="usuario-entrar"
                  name="usuario-entrar"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="senha-field ct-input">
                <label htmlFor="senha-entrar">Password</label>
                <span onClick={handleToggle}>
                  <Icon icon={icon} size={20} />
                </span>
                <input
                  type={type}
                  id="senha-entrar"
                  name="senha-entrar"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="remember-create-link">
                <Link to="/register" className="create-link">
                  Create Account
                </Link>
              </div>
              <button type="submit" className="submit">
                Log In
              </button>
            </form>
          </div>
        </section>
      </div>
      <Snackbar open={openToast1} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Username já existe!
        </Alert>
      </Snackbar>
      <Snackbar open={openToast2} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Palavras-passe não coincidem!
        </Alert>
      </Snackbar>
      <Snackbar open={openToast3} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registado com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar open={openToast4} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Preencha o seu nome e a palavra-passe!
        </Alert>
      </Snackbar>
      <Snackbar open={openToast5} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Preencha a sua palavra-passe!
        </Alert>
      </Snackbar>
      <Snackbar open={openToast6} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
