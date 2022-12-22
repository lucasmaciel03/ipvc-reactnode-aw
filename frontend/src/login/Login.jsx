import React from "react";
import "../styles/login.css";

const login = () => {
  return (
    <div className="formlogin">
      <section className="login">
        <div className="btns-login">
          <button className="btn-entrar ativo">Log In</button>
          <button className="btn-cadastro">Sign up</button>
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

            <label htmlFor="lembrar" className="lembrar-label">
              <input type="checkbox" id="lembrar" name="lembrar" />
              &nbsp; Remember Me
            </label>
            <button type="submit" className="submit">
              Log In
            </button>
            <a href="/" className="forgot">
              Forgot username or password
            </a>
          </form>
          <form
            action="#"
            className="form-criar-conta"
            id="criar"
            method="post"
          >
            <div className="username-field ct-input">
              <label htmlFor="usuario">Username</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Username"
              />
              <span className="alert">
                Username must contain numbers, letters (lowercase or upercase)
                and at least 5 chars.
              </span>
            </div>
            <div className="email-field ct-input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <span className="alert">Email must be valid.</span>
            </div>
            <div className="password-field ct-input">
              <label htmlFor="senha">Password</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Password"
              />
              <span className="alert">
                Password must contain numbers at least 8 chars, 1 upercase
                letter, 1 lowercase and a special char.
              </span>
            </div>
            <div className="password-repeat-field ct-input">
              <label htmlFor="senharpt">Repeat Password</label>
              <input
                type="password"
                id="senharpt"
                name="senharpt"
                placeholder="Repeat Password"
              />
              <span className="alert">Passwords must match.</span>
            </div>
            <div className="termos-field ct-input">
              <input type="checkbox" id="termos" name="termos" />
              <label htmlFor="termos">I agree to the terms of use</label>
            </div>
            <button type="submit" className="submit" id="submit-conta">
              Create Account
            </button>
          </form>
        </div>
      </section>
      <button
        className="lightdarkmode"
        aria-label="ativar darkmode ou lightmode"
        type="button"
      ></button>
    </div>
  );
};

export default login;
