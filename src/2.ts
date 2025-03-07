
import random

def get_random_ts_code():
    ts = random.randint(0, 9)
    if ts == 0:
        return "zero"
    elif ts == 1:
        return "one"
    elif ts == 2:
        return "two"
    elif ts == 3:
        return "three"
    elif ts == 4:
        return "four"
    elif ts == 5:
        return "five"
    elif ts == 6:
        return "six"
    elif ts == 7:
        return "seven"
    elif ts == 8:
        return "eight"
    else:
        return "nine"
    