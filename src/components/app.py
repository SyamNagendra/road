import sys
import tensorflow as tf
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import io

# Ensure UTF-8 Encoding
sys.stdout.reconfigure(encoding='utf-8')

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})  # Fix CORS issue

# Load model
model = tf.keras.models.load_model("pothole_detection_model.h5")

class_labels = ["Normal Road", "Pothole Road"]

def preprocess_image(image):
    img_height, img_width = 150, 150  # Adjust based on your model's input size
    image = image.resize((img_height, img_width))
    img_array = np.array(image) / 255.0  # Normalize
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]
    print("Received image:", file.filename)  # Debugging log

    try:
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        img_array = preprocess_image(image)

        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        confidence = float(np.max(prediction))

        return jsonify({
            "predicted_class": class_labels[predicted_class],
            "confidence": confidence
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
