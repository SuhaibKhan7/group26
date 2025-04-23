import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
export default function Dashboard() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        alert("logout successfull");
        navigate("/");
      })
      .catch((error) => {});
  }
  function handleFile(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
    console.log(file);
  }

  function fileUpload() {}

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={fileUpload}>
        <input type="file" name="" id="" onChange={handleFile} />
        <button type="submit">UPLOAD</button>
      </form>
    </div>
  );
}
