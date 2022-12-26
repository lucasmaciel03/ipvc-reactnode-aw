import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const login = () => {
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
              <input
                type="password"
                id="senha-entrar"
                name="senha-entrar"
                placeholder="Password"
              />
            </div>
            <div className="remember-create-link">
              <label htmlFor="lembrar" className="lembrar-label">
                <input type="checkbox" id="lembrar" name="lembrar" />
                &nbsp; Remember Me
              </label>
              <Link to="/Register" className="create-link">
                Create Account
              </Link>
            </div>
            <button type="submit" className="submit">
              Log In
            </button>
            <a href="/" className="forgot">
              Forgot username or password
            </a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default login;
