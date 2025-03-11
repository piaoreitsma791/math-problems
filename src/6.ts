export const getRandomMathProblem = () => {
  // Generate a random number between 1 and 100
  let num1 = Math.floor(Math.random() * 100) + 1;
  let num2 = Math.floor(Math.random() * 100) + 1;

  // Choose a random operation (+, -, x, /)
  let operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

  // Evaluate the problem and return the result
  let result = operation === '+' ? num1 + num2 :
    operation === '-' ? num1 - num2 :
      operation === '*' ? num1 * num2 :
        operation === '/' && num2 !== 0 ? num1 / num2 : null;

  return {
    num1,
    num2,
    operation,
    result: result ? result.toString() : "Error: can't divide by zero",
  };
}
