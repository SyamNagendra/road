import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/complaints.css";

export default function ComplaintsFiled() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Load complaints from localStorage
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  const handleComplaintClick = (id) => {
    if (id % 2 !== 0) {
      navigate(`/work`);
    } else {
      navigate(`/done`);
    }
  };

  return (
    <div className="complaints-filed-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* Header */}
      <h1 className="page-title">Complaints Filed</h1>

      {/* Complaints List */}
      <div className="complaints-list">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div
              className="complaint-card"
              key={complaint.id}
              onClick={() => handleComplaintClick(complaint.id)}
            >
              <div className="complaint-info">
                <h2 className="complaint-id">Complaint {complaint.id}</h2>
                <p className="road-name">Road Name: {complaint.roadName}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-complaints">No complaints filed yet.</p>
        )}
      </div>
    </div>
  );
}
