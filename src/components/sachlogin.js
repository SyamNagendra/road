import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import sachivalayamIcon from "../assets/sach.jpg"; 

export default function Sachlogin() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* Header */}
      <div className="header">
        <img src={require('../assets/sach.jpg')} alt="Sachivalayam Icon" className="icon" />
        <h1 className="page-title">Sachivalayam</h1>
        <h2 className="login-title">Login</h2>
      </div>

      {/* Login Form */}
      <form className="login-form">
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot-password">forgot password</a>
        <button type="submit" className="login-button" onClick={() => navigate('/sachdash')}>
          Login
        </button>
      </form>
    </div>
  );
}
