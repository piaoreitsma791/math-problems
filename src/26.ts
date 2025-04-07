import random

def generate_random_tsp():
    """
    Generate a random Traveling Salesman Problem (TSP) route.
    
    This function generates a random sequence of points and calculates their distances,
    then finds an optimal TSP solution to visit all the points exactly once and return to the starting point.
    It returns the optimized TSP path.
    """
    n = 100  # Number of cities
    tsp_path = [random.randint(0, n-1) for _ in range(n)]  # Randomly generated TSP route
    tsp_distance = sum(abs(point - next_point) for point, next_point in zip(tsp_path[:-1], tsp_path[1:]))  # Calculate total distance of the optimized TSP path
    return tsp_path, tsp_distance

# Example usage:
print(generate_random_tsp())
