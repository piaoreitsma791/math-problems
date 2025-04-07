import numpy as np
np.random.seed(42)
import matplotlib.pyplot as plt

x = np.arange(-10, 10, 0.1)  # Generate a range of x values from -10 to 10 with a step size of 0.1
y = np.sin(x) + np.cos(x * x / 2)  # Calculate the function y = sin(x) + cos(x*x/2)
plt.plot(x, y)  # Plot the function on the graph
plt.title('Sine and Cosine Function')  # Add a title to the plot
plt.xlabel('x values')  # Add an x-axis label
plt.ylabel('y values')  # Add a y-axis label
plt.show()  # Display the plot
