import {random} from 'math-random';
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num1 = getRandomInt(1, 20);
const num2 = getRandomInt(1, 20);
const operator = ['+', '-', '*', '/'][getRandomInt(0, 3)];
let solution = 0;
if (operator === '+') {
  solution = num1 + num2;
} else if (operator === '-') {
  solution = num1 - num2;
} else if (operator === '*') {
  solution = num1 * num2;
} else if (operator === '/') {
  solution = num1 / num2;
}
return `${num1} ${operator} ${num2} = ${solution}`;