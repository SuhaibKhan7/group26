import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
function Signup() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSignup(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Signup successfull");
        navigation("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <h1>Signup......</h1>
      <form action="" onSubmit={handleSignup}>
        <label for="username">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label for="username">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
