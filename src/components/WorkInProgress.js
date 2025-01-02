import React from "react";
import "../css/WorkInProgress.css";
import { useNavigate } from "react-router-dom";
import img from "../assets/work.png";

const WorkInProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="wip-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <div className="wip-content">
        <img
          src= { img } // Placeholder for "Work in Progress" image
          alt="Work in Progress"
          className="wip-image"
        />
      </div>
    </div>
  );
};

export default WorkInProgress;
