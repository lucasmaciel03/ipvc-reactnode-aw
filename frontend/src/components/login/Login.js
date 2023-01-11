import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Alert,
  Snackbar,
} from "@mui/material";

import axios from "axios";

const Login = () => {
  const [openToast1, setOpenToast1] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast1(false);
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
    const data = {
      username: username,
      password: password,
    };

    axios.post('http://localhost:4243/api/users/auth', data)
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        // save token or user in local storage
        // redirect to home page
      })
      .catch((err) => {
        // if password was worn return error message
        console.log(err);
        setOpenToast1(true);
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
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Credenciais Erradas!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
