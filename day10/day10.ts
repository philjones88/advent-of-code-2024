const processInput = (rawInput: string): number[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim().split('').map(Number));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const countTrails = (grid: number[][], x: number, y: number): number => {
  if (grid[x][y] === 9) {
    return 1;
  }
  let count = 0;
  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (isValidMove(grid, newX, newY, grid[x][y])) {
      count += countTrails(grid, newX, newY);
    }
  }
  return count;
};

const findTrails = (grid: number[][], x: number, y: number, visited = new Set<string>()): number => {
  const key = `${x},${y}`;
  if (visited.has(key)) {
    return 0;
  }

  visited.add(key);

  if (grid[x][y] === 9) {
    return 1;
  }

  let score = 0;
  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (isValidMove(grid, newX, newY, grid[x][y]) && !visited.has(`${newX},${newY}`)) {
      score += findTrails(grid, newX, newY, visited);
    }
  }

  return score;
};

const traverseGrid = (grid: number[][], fn: (grid: number[][], x: number, y: number) => number): number => {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        sum += fn(grid, i, j);
      }
    }
  }
  return sum;
};

const isValidMove = (grid: number[][], x: number, y: number, currentHeight: number): boolean =>
  x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === currentHeight + 1;

export const day10part1 = (rawInput: string) => traverseGrid(processInput(rawInput), findTrails);

export const day10part2 = (rawInput: string) => traverseGrid(processInput(rawInput), countTrails);
