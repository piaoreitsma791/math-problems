import * as math from 'mathjs';

export function solveMathProblem(problem: string): number {
  const equation = problem;
  const result = math.evaluate(equation);
  return result;
}
