import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AddComplaint.css";

export default function AddComplaint() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      // Send image to backend
      const formData = new FormData();
      formData.append("image", file);

      try {
        console.log("Uploading image..."); // Debugging log
        const response = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: formData,
        });

        const textResponse = await response.text(); // Read response as text
        console.log("Raw Response:", textResponse); // Debugging log

        const data = JSON.parse(textResponse); // Parse JSON manually

        if (!response.ok) {
          throw new Error(`Error: ${data.error || "Unknown error"}`);
        }

        // Store the prediction result
        setPrediction({
          predicted_class: data.predicted_class,
          confidence: data.confidence,
        });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!prediction) {
      alert("Please upload an image before submitting.");
      return;
    }

    const { predicted_class, confidence } = prediction;

    // Conditions for allowing submission
    if (predicted_class === "Normal Road" && confidence > 0.7) {
      alert("Submission not allowed: The road is classified as 'Normal Road' with high confidence.");
      return;
    }

    if (predicted_class === "Pothole Road" && confidence <= 0.5) {
      alert("Confidence too low: Please upload a clearer image.");
      return;
    }

    // Collect form data
    const formData = {
      street: document.getElementById("street").value,
      ward: document.getElementById("ward").value,
      village: document.getElementById("village").value,
      mandal: document.getElementById("mandal").value,
      distance: document.getElementById("distance").value,
      description: document.getElementById("description").value,
      predicted_class,
      confidence,
    };

    console.log("Form Data:", formData);

    // Here, you can send the formData to your backend
    // Example:
    // fetch("your_backend_endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json()).then(data => {
    //   console.log("Server Response:", data);
    //   navigate("/success"); // Redirect on successful submission
    // });

    navigate(""); // Navigate after successful submission
  };

  return (
    <div className="complaint-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/sachdash")}>
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
      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" placeholder="Enter street name" required />
        </div>
        <div className="input-group">
          <label htmlFor="ward">Ward No:</label>
          <input type="text" id="ward" placeholder="Enter ward number" required />
        </div>
        <div className="input-group">
          <label htmlFor="village">Village:</label>
          <input type="text" id="village" placeholder="Enter village name" required />
        </div>
        <div className="input-group">
          <label htmlFor="mandal">Mandal:</label>
          <input type="text" id="mandal" placeholder="Enter mandal" required />
        </div>
        <div className="input-group">
          <label htmlFor="distance">Distance:</label>
          <input type="text" id="distance" placeholder="Enter distance" required />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description of the Road:</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Provide road description"
            required
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
