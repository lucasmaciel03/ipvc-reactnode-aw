import React, { useState } from "react";
import "./Register.css";
import { Link, Navigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import {
  Snackbar,
  Alert
} from "@mui/material"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [openToast1, setOpenToast1] = useState(false);
  const [openToast2, setOpenToast2] = useState(false);
  const [openToast3, setOpenToast3] = useState(false);
  const [openToast4, setOpenToast4] = useState(false);
  const [openToast5, setOpenToast5] = useState(false);
  const [openToast6, setOpenToast6] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  // create handle close for all openToast = true to false
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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


  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    }

    // sen message if name and password are null
    if (username === "" && password === "") {
      setOpenToast4(true);
      return;
    }

    //validate if password null
    if (password === "") {
      setOpenToast5(true);
      return;
    }

    //validate if username null
    if (username === "") {
      setOpenToast6(true);
      return;
    }

    //validate password and repeat password
    if (password !== repeatPassword) {
      setOpenToast2(true);
      return;
    }

    // before create new user verify if username already exist if not exist show toast 3 and after 3 seconds redirect to login
    await axios.post("http://localhost:4243/api/users/createUser", user).then((res) => {
      setOpenToast3(true);
      setTimeout(() => {
        navigate("/");
      }, 1000)
    })
    .catch((err) => {
      if (err.response.status === 400) {
        setErrorMessage(err.response.data);
        setOpenToast1(true);
      }
    });
  };

  return (
    <>
      <div className="registerform">
        <section className="login">
          <div className="btns-login">
            <h2>Sign Up</h2>
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="senha-field ct-input">
                <label htmlFor="senha-entrar">Password</label>
                <span className="eyeicon" onClick={handleToggle}>
                  <Icon icon={icon} size={20} />
                </span>
                <input
                  type={type}
                  id="senha-entrar"
                  name="senha-entrar"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="senha-field ct-input">
                <label htmlFor="senha-entrar">Repeat Password</label>
                <span className="eyeicon" onClick={handleToggle}>
                  <Icon icon={icon} size={20} />
                </span>
                <input
                  type={type}
                  id="senha-entrar"
                  name="senha-entrar"
                  placeholder="Repeat Password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div className="remember-create-link">
                <Link to="/" className="create-link">
                  I already have an account.
                </Link>
              </div>
              <button type="submit" className="submit">
                Register
              </button>
            </form>
          </div>
        </section>
      </div>
      <Snackbar open={openToast1} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
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
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%"}}>
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
          Preencha o seu nome!
        </Alert>
      </Snackbar>

    </>
  );
}

export default Register;
