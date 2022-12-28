import React from "react";
import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, repeatPassword);

    //validate password and repeat password
    if (password !== repeatPassword) {
      toast.error("❌ Password erro", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
          toast.success("✅ User created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success("✅ User created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

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
  );
}

export default Register;
