import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  function handleLogin(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("login successfull");
        navigation("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function handleGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <h1>Login......</h1>
      <form action="" onSubmit={handleLogin}>
        <label for="username">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label for="username">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogle} style={{ color: "red" }}>
        Google Login
      </button>
    </div>
  );
}

export default Login;
