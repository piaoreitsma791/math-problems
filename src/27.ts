from sympy import symbols, solve

# Define variables
x = symbols('x')

# Solve the equation
solution = solve(x**2 - 4*x + 1, x)

print(solution)
