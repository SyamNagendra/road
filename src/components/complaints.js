import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/complaints.css"; // Create and style this CSS file

export default function ComplaintsFiled() {
  const navigate = useNavigate();

  // Dummy data for complaints
  const complaints = [
    { id: 1, roadName: "Road Name 1" },
    { id: 2, roadName: "Road Name 2" },
    { id: 3, roadName: "Road Name 3" },
    { id: 4, roadName: "Road Name 4" },
    { id: 5, roadName: "Road Name 5" },
  ];

  const handleComplaintClick = (id) => {
    if ([1, 3, 5].includes(id)) {
      navigate(`/work`);
    } else if ([2, 4].includes(id)) {
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
        {complaints.map((complaint) => (
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
        ))}
      </div>
    </div>
  );
}
