from math import sin, cos, pi

def polar_to_cartesian(r, theta):
    x = r * cos(theta)
    y = r * sin(theta)
    return (x, y)

r = 3
theta = pi / 2
print(polar_to_cartesian(r, theta))
