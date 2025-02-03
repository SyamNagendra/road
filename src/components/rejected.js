import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/rejected.css";

export default function RejectedPage() {
  const navigate = useNavigate();

  return (
    <div className="rejected-page-container">
      <h1 className="rejected-title">Complaint Rejected</h1>
      <p className="rejected-message">
        Unfortunately, your complaint has been rejected. Please contact the authorities for further information.
      </p>
      <button className="back-button" onClick={() => navigate("/sachdash")}>←</button>
    </div>
  );
}
