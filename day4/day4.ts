const processInput = (rawInput: string): string[] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim());

const isInGridBounds = (grid: string[], i: number, j: number) => i >= 0 && i < grid.length && j >= 0 && j < grid[i].length;

const directions = [
  { dx: 0, dy: -1 }, // up
  { dx: 1, dy: -1 }, // up right
  { dx: 1, dy: 0 }, // right
  { dx: 1, dy: 1 }, // down right
  { dx: 0, dy: 1 }, // down
  { dx: -1, dy: 1 }, // down left
  { dx: -1, dy: 0 }, // left
  { dx: -1, dy: -1 }, // up left
];

const diagonals = [
  { dx1: -1, dy1: -1, dx2: 1, dy2: 1 }, // Top left to bottom right
  { dx1: 1, dy1: -1, dx2: -1, dy2: 1 }, // Top right to bottom left
];

const checkXMASPattern = (grid: string[], x: number, y: number) => {
  let validMASCount = 0;

  for (const { dx1, dy1, dx2, dy2 } of diagonals) {
    const top = { x: x + dx1, y: y + dy1 };
    const bottom = { x: x + dx2, y: y + dy2 };

    if (!isInGridBounds(grid, top.y, top.x) || !isInGridBounds(grid, bottom.y, bottom.x)) {
      return false;
    }

    const topLetter = grid[top.y][top.x];
    const bottomLetter = grid[bottom.y][bottom.x];

    const diagonal = [topLetter, grid[y][x], bottomLetter].join('');
    if (diagonal === 'MAS' || diagonal === 'SAM') {
      validMASCount++;
    }
  }

  if (validMASCount === 2) {
    return true;
  }

  return false;
};

export const day4part1 = (rawInput: string) => {
  const grid = processInput(rawInput);
  let result = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      for (const direction of directions) {
        let currentX = x;
        let currentY = y;
        const current = grid[currentY][currentX];

        const lettersInDir = [];
        lettersInDir.push(current);

        if (isInGridBounds(grid, currentY + direction.dy, currentX + direction.dx)) {
          lettersInDir.push(grid[currentY + direction.dy][currentX + direction.dx]);

          let nextInDirectionX = currentX + direction.dx;
          let nextInDirectionY = currentY + direction.dy;
          for (let i = 0; i < 2; i++) {
            nextInDirectionX += direction.dx;
            nextInDirectionY += direction.dy;
            if (isInGridBounds(grid, nextInDirectionY, nextInDirectionX)) {
              const nextLetter = grid[nextInDirectionY][nextInDirectionX];
              lettersInDir.push(nextLetter);
            }
          }
        }

        if (lettersInDir.join('') === 'XMAS') {
          result++;
        }
      }
    }
  }
  return result;
};

export const day4part2 = (rawInput: string) => {
  const grid = processInput(rawInput);

  let result = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'A' && checkXMASPattern(grid, x, y)) {
        result++;
      }
    }
  }
  return result;
};
