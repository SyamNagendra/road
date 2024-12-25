import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/roadDash.css";
import roadMinistryIcon from "../assets/road.jpg";

export default function ListComplaints() {
  const navigate = useNavigate();

  return (
    <div className="list-complaints-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* Header */}
      <div className="header">
        <img
          src={roadMinistryIcon}
          alt="Road Ministry Icon"
          className="icon"
        />
        <h1 className="page-title">Road Ministry</h1>
      </div>

      {/* List of Complaints Button */}
      <button
        className="complaints-button"
        onClick={() => navigate("/complaints")}
      >
        List of complaints
      </button>
    </div>
  );
}
