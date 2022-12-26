import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="registerform">
    <section className="login">
      <div className="btns-login">
        <h2>Sign Up</h2>
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

          <div className="username-field ct-input">
            <label htmlFor="usuario-entrar">Email</label>
            <input
              type="email"
              id="usuario-entrar"
              name="usuario-entrar"
              placeholder="Email"
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

          <div className="senha-field ct-input">
            <label htmlFor="senha-entrar">Repeat Password</label>
            <input
              type="password"
              id="senha-entrar"
              name="senha-entrar"
              placeholder="Repeat Password"
            />
          </div>
          <div className="remember-create-link">
            <Link to="/login" className="create-link">
              I already have an account.
            </Link>
          </div>
          <button type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </section>
    ;
  </div>
  )
};

export default register;
