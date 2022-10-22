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
      <form onSubmit={submitForm}>
        <div className="image-div">
          <img src={user} alt={"profile of a user"}></img>
        </div>
        <div className="input-div">
          <label>Enter your username</label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label>Enter your password</label>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className={"submit-btn"} type={"submit"} value={"submit"} />
      </form>
    </div>
  );
}

export default LoginForm;
