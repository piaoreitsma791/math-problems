import { random } from 'mathjs';

const generateMathProblem = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  let operator;
  switch (random(1, 3)) {
    case 1:
      operator = '+';
      return `${num1} + ${num2}`;
    case 2:
      operator = '-';
      return `${num1} - ${num2}`;
    default:
      operator = '*';
      return `${num1} * ${num2}`;
  }
};
