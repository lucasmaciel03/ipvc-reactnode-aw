import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };

  return (
    <div className="formlogin">
      <section className="login">
        <div className="btns-login">
          <h2>Log In</h2>
        </div>
        <div className="container">
          <form
            action="#"
            className="form-entrar ativo"
            method="post"
            id="entrar"
          >
            <div className="username-field ct-input">
              <label htmlFor="usuario-entrar">Username or email</label>
              <input
                type="text"
                id="usuario-entrar"
                name="usuario-entrar"
                placeholder="Username"
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
            <Link to="/resetpassword" className="forgot">
              Forgot password
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
