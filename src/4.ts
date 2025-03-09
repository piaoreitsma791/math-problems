function getRandomMathProblem(difficulty: number): string {
  if (difficulty === 1) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 2) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 3) {
    const num1 = Math.floor(Math.random() * 1000) + 1;
    const num2 = Math.floor(Math.random() * 1000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 4) {
    const num1 = Math.floor(Math.random() * 10000) + 1;
    const num2 = Math.floor(Math.random() * 10000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 5) {
    const num1 = Math.floor(Math.random() * 100000) + 1;
    const num2 = Math.floor(Math.random() * 100000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 6) {
    const num1 = Math.floor(Math.random() * 1000000) + 1;
    const num2 = Math.floor(Math.random() * 1000000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 7) {
    const num1 = Math.floor(Math.random() * 10000000) + 1;
    const num2 = Math.floor(Math.random() * 10000000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 8) {
    const num1 = Math.floor(Math.random() * 100000000) + 1;
    const num2 = Math.floor(Math.random() * 100000000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 9) {
    const num1 = Math.floor(Math.random() * 1000000000) + 1;
    const num2 = Math.floor(Math.random() * 1000000000) + 1;
    return `${num1} x ${num2}`;
  } else if (difficulty === 10) {
    const num1 = Math.floor(Math.random() * 10000000000) + 1;
    const num2 = Math.floor(Math.random() * 10000000000) + 1;
    return `${num1} x ${num2}`;
  } else {
    throw new Error("Invalid difficulty level");
  }
}
