import numpy as np
from sympy import symbols, solve

x = symbols('x')
equation = 3*x**2 - 7*x + 2
solution = solve(equation, x)
print(solution)
