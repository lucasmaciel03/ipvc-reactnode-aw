import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
// import Stack from '@mui/material/Stack';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
import {
  Snackbar,
  Alert
} from "@mui/material"



function Register() {
  const [openToast2, setOpenToast2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast2(false);
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
    console.log(username, password, repeatPassword);

    //validate password and repeat password
    if (password !== repeatPassword) {
      console.log('----------------------------------------ENTREI------------------------')
      setOpenToast2(true);
      return;
    }

    // call controller to register user
    fetch("http://localhost:4243/api/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          alert("✅ User created");
        } else {
          alert("❌ User not created");
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
                <span onClick={handleToggle}>
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
                <span onClick={handleToggle}>
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
      <Snackbar open={openToast2} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Compra efetuada com Sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Register;
