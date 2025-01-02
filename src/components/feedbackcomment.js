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
    alert("Thank you for your feedback!");
    setComments("");
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
