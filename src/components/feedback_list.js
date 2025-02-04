import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FeedbackList.css";

const FeedbackList = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedback data (replace this with actual API call if needed)
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
    setFeedbacks(storedFeedback);
  }, []);

    // Function to clear all feedback
  const clearFeedback = () => {
    localStorage.removeItem("feedbackData");  // Delete from localStorage
    setFeedbacks([]);  // Reset state
    alert("All feedback has been cleared!");
  };

  return (
    <div className="feedback-list-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <h2 className="title">User Feedback</h2>
      
      {feedbacks.length === 0 ? (
        <p className="no-feedback">No feedback available.</p>
      ) : (
        <div className="feedback-cards">
          {feedbacks.map((feedback, index) => (
  <div key={index} className="feedback-card">
    <h3>{feedback.name}</h3>
    <p><strong>Phone:</strong> {feedback.phone}</p>
    <p><strong>Categories:</strong> {feedback.categories.join(", ")}</p>
    {feedback.comments && (
      <p><strong>Comments:</strong> {feedback.comments}</p>
    )}
  </div>
))}

  {feedbacks.length > 0 && (
        <button className="clear-button" onClick={clearFeedback}>Clear Feedback</button>
      )}

        </div>
      )}
    </div>
  );
};

export default FeedbackList;
