import random

def get_random_math_problem(n=2):
    num1 = random.randint(1, n)
    num2 = random.randint(1, n)
    op = random.choice(['+', '-', '*', '/'])
    if op == '+':
        return f'{num1} + {num2} = ?'
    elif op == '-':
        return f'{num1} - {num2} = ?'
    elif op == '*':
        return f'{num1} * {num2} = ?'
    else:
        return f'{num1} / {num2} = ?'
