import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import roadMinistryIcon from "../assets/gov.jpg"; // Replace with the correct path

export default function govlogin() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      <div className="header">
        <img src={roadMinistryIcon} alt="Road Ministry Icon" className="icon" />
        <h1 className="page-title">Government</h1>
        <h2 className="login-title">Login</h2>
      </div>

      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />
        <a href="#" className="forgot-password">
          forgot password
        </a>
        <button type="submit" className="login-button">
          Login →
        </button>
      </form>
    </div>
  );
}