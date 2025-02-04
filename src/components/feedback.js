import React from "react";
import "../css/FeedbackForm.css";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const checkboxes = document.querySelectorAll("input[name='category']:checked");
    const categories = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    const newFeedback = { name, phone, categories };
  
    let existingFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
    existingFeedback.push(newFeedback);
    localStorage.setItem("feedbackData", JSON.stringify(existingFeedback));
  
    navigate("/feedbackcomments");
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="feedback-title">FEEDBACK FORM</h1>
      </div>

      <form className="feedback-form">
        <div className="user-info">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" className="input-field" placeholder="Enter your name" />

          <label htmlFor="phone">PHN NO</label>
          <input type="text" id="phone" className="input-field" placeholder="Enter your phone number" />
        </div>

        <div className="feedback-options">
          <p>Select feedback categories:</p>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="category" value="Pothole reporting" /> Pothole reporting
            </label>
            <label>
              <input type="checkbox" name="category" value="Repair Updates" /> Repair Updates
            </label>
            <label>
              <input type="checkbox" name="category" value="App Performance" /> App Performance
            </label>
            <label>
              <input type="checkbox" name="category" value="User Interface Design" /> User Interface Design
            </label>
            <label>
              <input type="checkbox" name="category" value="Other" /> Other
            </label>
          </div>
        </div>

        <button type="button" className="next-button" onClick={handleNext}>
          NEXT
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;