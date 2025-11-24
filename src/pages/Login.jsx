import React, { useState } from "react";
import { auth } from "../firebase"; // ✅ only auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // ✅ from firebase/auth
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role"); // "user" or "admin"

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      if(role === "admin") navigate("/admin");
      else navigate("/");
    } catch(e) {
      alert(e.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate("/");
    } catch(e) {
      alert(e.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login / Signup ({role || "user"})</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br /><br/>
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" /><br /><br/>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Login;
