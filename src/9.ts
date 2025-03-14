import random

def get_random_math_problem(numbers=None):
    if numbers is None:
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    num1 = random.choice(numbers)
    num2 = random.choice(numbers)
    operand = random.choice(['+', '-', '*', '/'])
    if operand == '+':
        return f"{num1} + {num2}"
    elif operand == '-':
        return f"{num1} - {num2}"
    elif operand == '*':
        return f"{num1} * {num2}"
    else:
        return f"{num1} / {num2}"

def solve_math_problem(problem):
    num1, operand, num2 = problem.split()
    num1 = int(num1)
    num2 = int(num2)
    if operand == '+':
        return num1 + num2
    elif operand == '-':
        return num1 - num2
    elif operand == '*':
        return num1 * num2
    else:
        return num1 / num2

# Test the code
print(f"{get_random_math_problem()} = {solve_math_problem(get_random_math_problem())}")