import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pothole  from "../assets/welcome.jpg";
import logo from "../assets/logo.jpg";
import "../css/WelcomePage.css"; // Include the existing CSS file

export default function WelcomePage() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate  = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="welcome-container">
      {/* Header */}
      <div className="welcome-header">
        <div className="profile-icon">
            <img src= { logo } alt="Logo"/>
        </div>
        <h1 className="welcome-title">SafeRoute</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Menu Icon */}
        </div>
      </div>

      {/* Popup Menu */}
      {showMenu && (
        <div className="popup-menu">
          <button className="close-button" onClick={toggleMenu}>×</button>
          <button className="menu-option" onClick={() => navigate("/main")}>Login</button>
          <button className="menu-option" onClick={() => navigate("/about")}>About</button>
          <button className="menu-option" onClick={() => navigate("/feedback")}>Feedback</button>
        </div>
      )}

      {/* Image Section */}
      <div className="image-container">
        <img src= { pothole}  alt="Pothole Uncovered" className="pothole-image" />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2 className="section-title">Pothole Uncovered</h2>
        <p className="section-description">
          Driving on pothole-ridden roads is not just frustrating—it’s unsafe. Our innovative platform is here to 
          revolutionize road safety by addressing one of the most persistent issues in urban and rural areas: potholes.
        </p>

        <h2 className="section-title">About Us</h2>
        <p className="section-description">
          At Pothole Uncovered, we leverage technology, community collaboration, and smart solutions to detect, 
          report, and fix potholes more efficiently than ever before. Our mission is to create smoother, safer, 
          and more reliable roads for everyone—whether you're a driver, cyclist, or pedestrian.
        </p>
      </div>
    </div>
  );
}
