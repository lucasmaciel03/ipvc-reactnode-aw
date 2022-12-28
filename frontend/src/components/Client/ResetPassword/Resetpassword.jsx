import React from "react";
import "./resetpassword.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const Resetpassword = () => {
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
    <div className="registerform">
      <section className="login">
        <div className="btns-login">
          <h2>Reset Password</h2>
        </div>
        <div className="container">
          <form
            action="#"
            className="form-entrar ativo"
            method="post"
            id="entrar"
          >
            <div className="username-field ct-input">
              <label htmlFor="usuario-entrar">Username</label>
              <input
                type="text"
                id="usuario-entrar"
                name="usuario-entrar"
                placeholder="Username"
              />
            </div>

            <div className="senha-field ct-input">
              <label htmlFor="senha-entrar">New Password</label>
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
              />
            </div>
            <button type="submit" className="submit">
              Reset Password
            </button>
            <Link to="/login" className="forgot">
              Back
            </Link>
          </form>
        </div>
      </section>
      ;
    </div>
  );
};

export default Resetpassword;
