import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css"; // Create and style this CSS file
import Govlogo from "../assets/gov.jpg";

export default function Dashboard() {
  const navigate = useNavigate();

  // Dummy data for notifications
  const notifications = [
    { id: 1, title: "Title", description: "Description", time: "9:41 AM" },
    { id: 2, title: "Title", description: "Description", time: "9:41 AM" },
    { id: 3, title: "Title", description: "Description", time: "9:41 AM" },
    { id: 4, title: "Title", description: "Description", time: "9:41 AM" },
  ];

  return (
    <div className="dashboard-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/main")}>
          ←
        </button>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="govt-icon">
          <img src={Govlogo} alt="Government Icon" />
          <p>GOVT</p>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="notifications-section">
        <div className="notifications-header">
          <h2 className="notifications-title">Notifications</h2>
          <div className="notification-bell">
            <span className="red-dot"></span>
          </div>
        </div>
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div className="notification-card" key={notification.id}>
              <div className="notification-icon">
                <div className="placeholder-icon"></div>
              </div>
              <div className="notification-details">
                <h3 className="notification-title">{notification.title}</h3>
                <p className="notification-description">{notification.description}</p>
              </div>
              <div className="notification-time">{notification.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
