import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../css/roadDash.css";
import logo from "../assets/road.jpg";
import img from "../assets/image 7.png";

const ComplaintsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/main"); // Navigate to the previous page
  };

  return (
    <div className="container">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div className="header">
        <div className="header-title">WELCOME!!</div>
        <div className="profile">
          <img
            src= { logo } // Replace with the actual profile image URL
            alt="Profile"
          />
          <span>ROAD MINISTRY</span>
        </div>
      </div>
      <div className="icon-container">
        <img
          src= { img } // Replace with the actual icon URL
          alt="Complaints Icon"
          className="icon"
        />
      </div>
      <button className="button"onClick={ ()=> navigate('/complaints')}>List of complaints</button>
    </div>
  );
};

export default ComplaintsPage;
