import sympy as sp
from sympy import symbols, solve

x = symbols('x')
equation = sp.Eq(x**2 - 4*x + 3, 0)
solution = solve(equation, x)
print(solution)
