import numpy as np
from sklearn.datasets import make_blobs

# Generate synthetic data for demonstration purposes
X, y = make_blobs(n_samples=100, centers=2, random_state=42)

# Define and train a model
model = np.mean(X[y == 0], axis=0)
model.fit(model)

# Print the model output
print("Model Output:", model)
