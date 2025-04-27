import random
def generate_math_problem():
    # Example 1: Arithmetic problem with integers
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    operation = random.choice(['+', '-', '*'])
    problem = f"{num1} {operation} {num2}"
    
    # Example 2: Simple multiplication problem
    number_to_multiply = random.randint(1, 100)
    multiplied_number = number_to_multiply * 3
    
    return problem

def solve_math_problem(problem):
    result = eval(problem)
    return f"The solution to the problem '{problem}' is {result}"

if __name__ == "__main__":
    math_problems = [generate_math_problem() for _ in range(5)]
    print(math_problems)

