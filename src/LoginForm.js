import React, { useState } from "react";
import "./LoginForm.css";
import user from "./user-profile.png";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      console.log(e.target[i].value);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <h3>Hello, Teachers!</h3>
      <h4>Enter your personal details below.</h4>
      <form>
        <div>
          <label for={"name"}>Username:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label for={"id"}>Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <a href="#">Forget password / Username</a>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
        <div>
          <a href="#">Not registered? Create Account</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
