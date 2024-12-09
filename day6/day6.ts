const processInput = (rawInput: string): string[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim().split(''));

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const findStartPosition = (grid: string[][]): [number, number] => {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === '^') {
        return [x, y];
      }
    }
  }
};

const findGridObstacles = (grid: string[][]): Map<string, number[]> => {
  const obstacles = new Map<string, number[]>();
  grid.forEach((line, i) => {
    line.forEach((char, j) => {
      if (char === '#') {
        obstacles.set(`${i},${j}`, []);
      }
    });
  });
  return obstacles;
};

const isOutOfGrid = (grid: string[][], x: number, y: number): boolean => x >= grid.length || x < 0 || y >= grid[0].length || y < 0;

function tryNewMap(newGrid: string[][], newObstacles: Map<string, number[]>, x: number, y: number, direction: number) {
  while (true) {
    let newX = x + directions[direction][0];
    let newY = y + directions[direction][1];

    if (isOutOfGrid(newGrid, newX, newY)) {
      return 0;
    }

    const key = `${newX},${newY}`;

    if (!newObstacles.has(key)) {
      newObstacles.set(key, []);
    }

    if (newGrid[newX][newY] === '#') {
      if (newObstacles.get(key).includes(direction)) {
        return 1;
      } else {
        newObstacles.get(key).push(direction);
        direction = (direction + 1) % directions.length;
      }
    } else {
      [x, y] = [newX, newY];
      newGrid[x][y] = 'X';
    }
  }
}

export const day6part1 = (rawInput: string) => {
  const grid = processInput(rawInput);
  let [x, y] = findStartPosition(grid);
  let direction = 0;
  while (true) {
    const newX = x + directions[direction][0];
    const newY = y + directions[direction][1];

    if (isOutOfGrid(grid, newX, newY)) {
      break;
    }

    if (grid[newX][newY] === '#') {
      direction = (direction + 1) % directions.length;
    } else {
      [x, y] = [newX, newY];
      grid[x][y] = 'X';
    }
  }
  return grid.reduce((sum: number, line: string[]) => (sum += line.filter((n) => n === 'X').length), 0);
};

export const day6part2 = (rawInput: string) => {
  const grid = processInput(rawInput);
  let [x, y] = findStartPosition(grid);
  const obstacles = findGridObstacles(grid);
  let result = 0;
  let direction = 0;
  while (true) {
    let newX = x + directions[direction][0];
    let newY = y + directions[direction][1];

    if (isOutOfGrid(grid, newX, newY)) {
      break;
    }

    const key = `${newX},${newY}`;

    if (grid[newX][newY] === '#') {
      if (!obstacles.get(key).includes(direction)) {
        obstacles.get(key).push(direction);
      }
      direction = (direction + 1) % directions.length;
    } else {
      if (grid[newX][newY] !== 'X') {
        let newGrid = grid.map((line) => [...line]);
        newGrid[newX][newY] = '#';

        let newObstacles = new Map<string, number[]>();
        obstacles.forEach((value, key) => {
          newObstacles.set(key, [...value]);
        });

        result += tryNewMap(newGrid, newObstacles, x, y, direction);
      }

      [x, y] = [newX, newY];
      grid[x][y] = 'X';
    }
  }
  return result;
};
