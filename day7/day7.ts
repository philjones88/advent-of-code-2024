const processInput = (rawInput: string): number[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim().split(/ |: /).map(Number));

export const day7part1 = (rawInput: string) => {
  const equations = processInput(rawInput);
  // console.log(equations);
  const operations = [(a: number, b: number) => a + b, (a: number, b: number) => a * b];

  const tryOperation = (eq: number[], i: number, t: number): boolean => {
    if (i >= eq.length) {
      return t === eq[0];
    }
    return operations.some((op) => tryOperation(eq, i + 1, op(t, eq[i])));
  };

  return equations.reduce((sum, eq) => (sum += tryOperation(eq, 2, eq[1]) ? eq[0] : 0), 0);
};

export const day7part2 = (rawInput: string) => {
  const equations = processInput(rawInput);
  // console.log(equations);
  const operations = [(a: number, b: number) => a + b, (a: number, b: number) => a * b, (a: number, b: number) => +(String(a) + b)];

  const tryOperation = (eq: number[], i: number, t: number): boolean => {
    if (i >= eq.length) {
      return t === eq[0];
    }
    return operations.some((op) => tryOperation(eq, i + 1, op(t, eq[i])));
  };

  return equations.reduce((sum, eq) => (sum += tryOperation(eq, 2, eq[1]) ? eq[0] : 0), 0);
};
