  import random

def get_random_math_problem():
  operators = ["+", "-", "*", "/"]
  num1 = random.randint(1, 10)
  num2 = random.randint(1, 10)
  operator = random.choice(operators)
  solution = eval(f"{num1} {operator} {num2}")
  return f"What is {num1} {operator} {num2}?"