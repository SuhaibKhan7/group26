import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("");
  function handleLogin(){
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <label for="username">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label for="username">Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
