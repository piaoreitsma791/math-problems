import math
from sympy import symbols

a, b = symbols('a b')
expression = 3*a + 2*b - sqrt(5)
simplified_expression = expression.simplify()
print(simplified_expression)
