import React, { useState } from "react";

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
        <div>User image comes here.</div>
        <div>
          <label>Enter your username</label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type={"submit"} value={"submit"} />
      </form>
    </div>
  );
}

export default LoginForm;
