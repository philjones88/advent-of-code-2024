const processInput = (rawInput: string): string[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim().split(''));

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

const countCorners = (grid: string[][], x: number, y: number) =>
  [0, 1, 2, 3]
    .map((d) => [directions[d], directions[(d + 1) % 4]])
    .map(([[dx1, dy1], [dx2, dy2]]) => [
      grid[y][x],
      grid[y + dy1]?.[x + dx1],
      grid[y + dy2]?.[x + dx2],
      grid[y + dy1 + dy2]?.[x + dx1 + dx2],
    ])
    .filter(([plant, left, right, mid]) => (left !== plant && right !== plant) || (left === plant && right === plant && mid !== plant))
    .length;

const formRegion = (grid: string[][], plotted: Set<string>, x: number, y: number) => {
  if (plotted.has([x, y].join(','))) {
    return { area: 0, perimeter: 0, corners: 0 };
  }

  const plant = grid[y][x];
  const plotQueue: { x: number; y: number }[] = [{ x, y }];

  let [area, perimeter, corners] = [1, 4, countCorners(grid, x, y)];

  plotted.add([x, y].join(','));

  while (plotQueue.length > 0) {
    // console.log('current queue', plotQueue);
    const { x, y } = plotQueue.shift();
    directions
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(([x, y]) => grid[y]?.[x] === plant)
      .forEach(([x, y]) => {
        perimeter--;
        if (!plotted.has([x, y].join(','))) {
          area += 1;
          perimeter += 4;
          corners += countCorners(grid, x, y);
          plotQueue.push({ x, y });
          plotted.add([x, y].join(','));
        }
      });
  }
  return { area, perimeter, corners };
};

export const day12part1 = (rawInput: string) => {
  const grid = processInput(rawInput);

  const plotted = new Set<string>();

  return grid
    .flatMap((row, i) => row.map((_, ii) => formRegion(grid, plotted, ii, i)))
    .map((r) => r.area * r.perimeter)
    .reduce((acc, i) => acc + i, 0);
};

export const day12part2 = (rawInput: string) => {
  const grid = processInput(rawInput);

  const plotted = new Set<string>();

  return grid
    .flatMap((row, y) => row.map((_, x) => formRegion(grid, plotted, x, y)))
    .map((i) => i.area * i.corners)
    .reduce((acc, i) => acc + i, 0);
};
