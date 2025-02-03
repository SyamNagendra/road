import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/AdminComplaintDetails.css"

export default function AdminComplaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const foundComplaint = storedComplaints.find((c) => c.id === parseInt(id));
    if (foundComplaint) setComplaint(foundComplaint);
  }, [id]);

  const updateComplaintStatus = (newStatus) => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const updatedComplaints = storedComplaints.map((c) =>
      c.id === parseInt(id) ? { ...c, status: newStatus } : c
    );
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
    setComplaint({ ...complaint, status: newStatus });
  };

  if (!complaint) return <p>Loading complaint details...</p>;

  return (
    <div className="admin-complaint-container">
      <button className="back-button" onClick={() => navigate("/roaddash")}>← Back</button>
      <h1>Complaint {complaint.id}</h1>
      <p><strong>Road Name:</strong> {complaint.roadName}</p>
      <p><strong>Ward:</strong> {complaint.ward}</p>
      <p><strong>Village:</strong> {complaint.village}</p>
      <p><strong>Mandal:</strong> {complaint.mandal}</p>
      <p><strong>Distance:</strong> {complaint.distance}</p>
      <p><strong>Description:</strong> {complaint.description}</p>
      <p><strong>Status:</strong> {complaint.status || "Pending"}</p>

      {/* Approve / Reject / Mark as Completed */}
      {complaint.status !== "completed" && (
        <div className="admin-actions">
          {complaint.status !== "approved" && (
            <button className="approve-button" onClick={() => updateComplaintStatus("approved")}>Approve (Work in Progress)</button>
          )}
          {complaint.status === "approved" && (
            <button className="complete-button" onClick={() => updateComplaintStatus("completed")}>Mark as Completed</button>
          )}
          <button className="reject-button" onClick={() => updateComplaintStatus("rejected")}>Reject</button>
        </div>
      )}
    </div>
  );
}
