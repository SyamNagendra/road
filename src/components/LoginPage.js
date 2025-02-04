import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import roadMinistryIcon from "../assets/road.jpg"; 

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication (replace with actual API call)
    if (email === "govt@gmail.com" && password === "govt123") {
      localStorage.setItem("role", "admin"); // Store admin role
      navigate("/roaddash"); // Redirect to admin dashboard
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/main")}>←</button>
      </div>

      <div className="header">
        <img src={roadMinistryIcon} alt="Road Ministry Icon" className="icon" />
        <h1 className="page-title">ROAD MINISTRY</h1>
        <h2 className="login-title">Login</h2>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="submit" className="login-button">Login →</button>
      </form>
    </div>
  );
}
