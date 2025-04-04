import React from "react";
import { auth } from "../firebase";

import { signOut } from "firebase/auth";

function Dashboard() {
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
