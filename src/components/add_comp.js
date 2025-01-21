import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AddComplaint.css";

export default function AddComplaint() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="complaint-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      </div>

      {/* Page Title */}
      <h1 className="complaint-title">Add Complaint</h1>

      {/* Upload Picture */}
      <div className="upload-container">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Uploaded preview"
            className="image-preview"
          />
        ) : (
          <>
            <label htmlFor="file-upload" className="upload-icon">
              +
            </label>
            <p className="upload-text">Upload the picture</p>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </>
        )}
      </div>

      {/* Complaint Form */}
      <form className="complaint-form">
        <div className="input-group">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" placeholder="Enter street name" />
        </div>
        <div className="input-group">
          <label htmlFor="ward">Ward No:</label>
          <input type="text" id="ward" placeholder="Enter ward number" />
        </div>
        <div className="input-group">
          <label htmlFor="village">Village:</label>
          <input type="text" id="village" placeholder="Enter village name" />
        </div>
        <div className="input-group">
          <label htmlFor="mandal">Mandal:</label>
          <input type="text" id="mandal" placeholder="Enter mandal" />
        </div>
        <div className="input-group">
          <label htmlFor="distance">Distance:</label>
          <input type="text" id="distance" placeholder="Enter distance" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description of the Road:</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Provide road description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Your Complaint
        </button>
      </form>
    </div>
  );
}
