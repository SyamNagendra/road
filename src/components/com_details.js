import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/complaintDetails.css"; // Ensure you have styling for this page

export default function CompDetails() {
  const { id } = useParams(); // Get complaint ID from URL
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    // Fetch complaints from localStorage
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const foundComplaint = storedComplaints.find((comp) => comp.id === Number(id)); // Find complaint by ID

    if (foundComplaint) {
      setComplaint(foundComplaint);
    } else {
      setComplaint(null);
    }
  }, [id]);

  if (!complaint) {
    return <p>No complaint found for ID: {id}</p>;
  }

  return (
    <div className="comp-details-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* Complaint Details */}
      <h1 className="comp-title">Complaint Details</h1>

      {/* Display Complaint Information */}
      <div className="comp-info">
        <p><strong>Road Name:</strong> {complaint.roadName}</p>
        <p><strong>Ward No:</strong> {complaint.ward}</p>
        <p><strong>Village:</strong> {complaint.village}</p>
        <p><strong>Mandal:</strong> {complaint.mandal}</p>
        <p><strong>Distance:</strong> {complaint.distance}</p>
        <p><strong>Description:</strong> {complaint.description}</p>
      </div>

      {/* Display Uploaded Image (if available) */}
      {complaint.imagePreview && (
        <div className="comp-image">
          <h3>Uploaded Image:</h3>
          <img src={complaint.imagePreview} alt="Uploaded Road Condition" />
        </div>
      )}

      {/* Repair Status (Dummy for now, update as needed) */}
      <div className="comp-status">
        <h3>Repair Status:</h3>
        <p>{complaint.id % 2 === 0 ? "Repair Completed ✅" : "Work in Progress 🚧"}</p>
      </div>
    </div>
  );
}
