import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa"; // Import the back icon
import "../css/sachdash.css"; // Import the CSS file

const HomePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/main"); // Navigate back to the previous page
  };

  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the desired route
  };

  return (
    <div className="container">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <h2 className="title">WELCOME USERNAME</h2>
      <img
        src={require('../assets/sach.jpg')}
        alt="Logo"
        className="logo"
      />
      <button
        className="button"
        onClick={() => navigate("/addcomp")}
      >
        File a new Complaint
      </button>
      <button
        className="button"
        onClick={() => handleButtonClick("/complaints")}
      >
        View Repair Status Of Road
      </button>
      <button
        className="button"
        onClick={() => handleButtonClick("/")}
      >
        View the Feedback Of Users
      </button>
    </div>
  );
};

export default HomePage;
