import { random } from 'math-random';

const generateMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let problem;

  switch (operation) {
    case '+':
      problem = `${num1} + ${num2}`;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      break;
    case '/':
      if (num2 !== 0) {
        problem = `${num1} / ${num2}`;
      } else {
        generateMathProblem();
      }
      break;
    default:
      generateMathProblem();
  }

  return `What is the result of ${problem}?`;
};
