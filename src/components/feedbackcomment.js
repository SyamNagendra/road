import React, { useState } from "react";
import "../css/FeedbackComments.css";
import { useNavigate } from "react-router-dom";

const FeedbackComments = () => {
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (comments.trim() === "") {
      alert("Please enter your comments or suggestions.");
      return;
    }
  
    // Retrieve existing feedback
    let feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  
    // Update the latest feedback entry with comments
    if (feedbackData.length > 0) {
      feedbackData[feedbackData.length - 1].comments = comments;
    }
  
    // Save updated feedback back to localStorage
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  
    alert("Thank you for your feedback!");
    setComments("");
    navigate("/userdash"); // Redirect to dashboard or feedback list
  };
  

  return (
    <div className="feedback-comments-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2 className="page-title">Comments or Suggestions</h2>
      <textarea
        className="comments-textarea"
        placeholder="Write your comments here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default FeedbackComments;
