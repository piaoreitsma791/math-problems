import math

def get_random_math_problem():
    """
    Generates a random math problem with two numbers and a mathematical operator (+, -, x, /).
    Returns a tuple in the form (number1, number2, operator) where number1 and number2 are integers and operator is a string representing the mathematical operator.
    """
    number1 = round(math.random() * 100)
    number2 = round(math.random() * 100)
    operators = ['+', '-', 'x', '/']
    operator = random.choice(operators)
    return (number1, number2, operator)