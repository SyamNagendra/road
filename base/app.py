import tensorflowjs as tfjs
from tensorflow.keras.models import load_model

# Load your .h5 model
model = load_model('pothole_detection_model.h5')

# Convert to TensorFlow.js format
tfjs.converters.save_keras_model(model, 'model')

