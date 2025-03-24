import numpy as np

def generate_random_sequence(length):
    """
    Generates a random sequence of numbers within a specified range.
    
    Parameters:
    length (int): The length of the generated sequence.
    
    Returns:
    list: A randomly generated sequence of numbers.
    """
    return [np.random.randint(-10, 10) for _ in range(length)]

# Generate and print a random sequence
random_sequence = generate_random_sequence(5)
print(random_sequence)
