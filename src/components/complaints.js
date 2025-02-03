import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/complaints.css";

export default function ComplaintsFiled() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const role = localStorage.getItem("role"); // "admin" or "user"

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  // Handle Back Button Navigation
  const handleBack = () => {
    navigate(role === "admin" ? "/roaddash" : "/sachdash");
  };

  // Handle Complaint Click for User
  const handleComplaintClick = (complaint) => {
    if (role === "admin") {
      navigate(`/admin/complaint/${complaint.id}`); // Admin review page
    } else {
      if (complaint.status === "approved") {
        navigate(`/work`);
      } else if (complaint.status === "completed") {
        navigate(`/done`);
      } else if (complaint.status === "rejected"){
        navigate(`/reject`); // Default work in progress
      }
    }
  };

  return (
    <div className="complaints-filed-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>←</button>
      </div>

      <h1 className="page-title">Complaints Filed</h1>

      <div className="complaints-list">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div
              className="complaint-card"
              key={complaint.id}
              onClick={() => handleComplaintClick(complaint)}
            >
              <div className="complaint-info">
                <h2 className="complaint-id">Complaint {complaint.id}</h2>
                <p className="road-name">Road Name: {complaint.roadName}</p>
                <p className="status">
                  Status:{" "}
                  <span className={`status-dot ${complaint.status === "completed" ? "green" : complaint.status === "approved" ? "yellow" : complaint.status === "rejected" ? "red" : "gray"}`}>
                  </span>
                </p>
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
