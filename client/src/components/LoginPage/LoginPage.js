import React, { useEffect, useState } from "react";
import { loginUser } from "../../user_actions/user_actions";
import { useDispatch } from "react-redux";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onEamilHandle = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandle = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      Password: Password,
    };

    dispatch(loginUser(body));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="eamil" value={Email} onChange={onEamilHandle} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandle} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;