import random

def get_random_math_problem():
    # Generate a random number between 1 and 10
    number = random.randint(1, 10)
    
    # Generate a random math operation (+, -, *, /)
    operation = random.choice(["+", "-", "*", "/"])
    
    # Generate another random number between 1 and 10
    second_number = random.randint(1, 10)
    
    if operation == "+":
        return f"{number} + {second_number} = ?"
    elif operation == "-":
        return f"{number} - {second_number} = ?"
    elif operation == "*":
        return f"{number} * {second_number} = ?"
    else:
        # Operation is "/"
        return f"{number} / {second_number} = ?"
