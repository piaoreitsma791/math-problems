from sympy import symbols, solve

x = symbols('x')
equation = x**2 - 4*x + 3
solution = solve(equation)
print(solution)
