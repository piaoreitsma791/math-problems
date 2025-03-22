import sympy as sp
from sympy import *
x, y = symbols('x y')
eq1 = Eq(x + y, 5)
eq2 = Eq(2*x - y, 3)

solution_eq1 = solve(eq1, (x, y))
solution_eq2 = solve(eq2, (x, y))

print("Equation 1:", solution_eq1)
print("Equation 2:", solution_eq2)
