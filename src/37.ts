import sympy

def calculate_expression(expr):
    result = eval(expr)
    print(f"The result is: {result}")

expr = "1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9"
calculate_expression(expr)
