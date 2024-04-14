import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} =useContext(UserContext);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({username,password})
  };


  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter user name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      {"\t"}
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default Login;
