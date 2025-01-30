import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa";
import "../css/AboutPage.css"; // Import the CSS file

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container">
      <div className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </div>
      <h2 className="section-title">About</h2>
      <p className="text">
        Empowering Communities, Enhancing Roads. Welcome to Pothole Uncovered,
        your trusted platform for tackling one of the most persistent urban and
        rural challenges: potholes. Our mission is to provide a seamless and
        innovative solution to ensure safer, smoother, and well-maintained
        roads for everyone.
      </p>
      <h2 className="section-title">Our Mission</h2>
      <p className="text">
        At Pothole Uncovered, we aim to bridge the gap between citizens, local
        authorities, and technology by creating a user-friendly platform to
        report, manage, and resolve road-related issues efficiently. We believe
        that better roads lead to better communities. By empowering users and
        promoting collaboration, we’re helping build safer streets for drivers,
        cyclists, and pedestrians alike.
      </p>
    </div>
  );
};

export default AboutPage;
