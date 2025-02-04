import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import sachivalayamIcon from "../assets/sach.jpg"; 

export default function SachLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validUsers = [
    { email: "sach73@gmail.com", password: "sach73", role: "user" },
    { email: "sach75@gmail.com", password: "sach75", role: "admin" },
    { email: "sach80@gmail.com", password: "sach80", role: "user" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any user in the list
    const user = validUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", "sachivalayam"); // Store user role
      navigate("/sachdash"); // Redirect based on role
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
      </div>

      <div className="header">
        <img src={sachivalayamIcon} alt="Sachivalayam Icon" className="icon" />
        <h1 className="page-title">Sachivalayam</h1>
        <h2 className="login-title">Login</h2>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
