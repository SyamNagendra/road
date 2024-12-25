import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginScreen.css";
import gov from "../assets/gov.jpg";
import sach from "../assets/sach.jpg";
import road from "../assets/road.jpg";
import user from '../assets/user.jpg';

export default function LoginScreen() {
    const navigate  = useNavigate();

  return (
    <div className="container">
      <h1 className="title">LOGINS</h1>

      <div className="button-row">
        <div className="button">
          <img src={sach} alt="Sachivalayam Icon" className="icon" />
          <button className="button-text" onClick={ () => navigate('/sachlogin') }>Sachivalayam</button>
        </div>

        <div className="button" >
          <img src={road} alt="Road Ministry Icon" className="icon" />
          <button className="button-text" onClick={ () => navigate('/login') }>Road Ministry</button>
        </div>
      </div>

      <div className="button-row">
        <div className="button" >
          <img
            src= {gov}
            alt="Govt Icon"
            className="icon"
          />
          <button className="button-text" onClick={ () => navigate("/govlogin") }>GOVT</button>
        </div>

        <div className="button" >
          <img
            src= {user}
            alt="User Icon"
            className="icon"
          />
          <button className="button-text" onClick={ () => navigate('/userlogin') }>User</button>
        </div>
      </div>
    </div>
  );
}
