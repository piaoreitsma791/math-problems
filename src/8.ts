// Generate a random math problem
function getRandomMathProblem() {
  // Select a random operation (+, -, x, /)
  const operation = Math.random() >= 0.5 ? "+" : "-";

  // Select two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);

  // Create the math problem
  let problem = `${num1} ${operation} ${num2}`;

  // Add parentheses around the numbers if necessary
  if (operation === "-") {
    problem = `(${problem})`;
  }

  return problem;
}
