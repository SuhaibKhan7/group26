import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { auth } from "./firebase";
import Signup from "./components/Signup";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Dashboard />} />
      <Route path="/login" element={!user ? <Login /> : <Dashboard />} />
      <Route path="/signup" element={!user ? <Signup /> : <Login />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
