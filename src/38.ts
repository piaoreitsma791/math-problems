import sympy as sp
from sympy import symbols, solve

x = symbols('x')
eq1 = x**2 - 3*x + 4
solution = solve(eq1, x)
print(solution)
