import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../css/Done.css";
import done from "../assets/completed.png";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="container">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div className="icon-container">
        <img
          src= { done } // Replace with the actual icon URL
          alt="Success Icon"
          className="icon"
        />
      </div>
      <div className="text">Successfully Completed</div>
    </div>
  );
};

export default SuccessPage;
