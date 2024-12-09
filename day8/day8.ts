const processInput = (rawInput: string): string[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim().split(''));

export const day8part1 = (rawInput: string) => {
  const grid = rawInput.trim().split('\n');
  // console.log(grid);
  const width = grid[0].length;
  const height = grid.length;

  const antennas = new Map<string, { x: number; y: number }[]>();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] !== '.') {
        if (!antennas.has(grid[y][x])) {
          antennas.set(grid[y][x], []);
        }
        antennas.set(grid[y][x], [...antennas.get(grid[y][x]), { x, y }]);
      }
    }
  }

  const antiNodes = new Set<string>();
  // console.log(antennas.keys());
  [...antennas.keys()].forEach((frequency) => {
    for (let i = 0; i < antennas.get(frequency).length; i++) {
      for (let j = 0; j < antennas.get(frequency).length; j++) {
        if (i === j) {
          continue;
        }

        const dx = antennas.get(frequency)[j].x - antennas.get(frequency)[i].x;
        const dy = antennas.get(frequency)[j].y - antennas.get(frequency)[i].y;

        const antiNodeX = antennas.get(frequency)[i].x + dx * 2;
        const antiNodeY = antennas.get(frequency)[i].y + dy * 2;

        if (antiNodeX >= 0 && antiNodeX < width && antiNodeY >= 0 && antiNodeY < height) {
          antiNodes.add(`${antiNodeX},${antiNodeY}`);
        }
      }
    }
  });

  return antiNodes.size;
};

export const day8part2 = (rawInput: string) => {
  const grid = rawInput.trim().split('\n');
  // console.log(grid);
  const width = grid[0].length;
  const height = grid.length;

  const antennas = new Map<string, { x: number; y: number }[]>();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] !== '.') {
        if (!antennas.has(grid[y][x])) {
          antennas.set(grid[y][x], []);
        }
        antennas.set(grid[y][x], [...antennas.get(grid[y][x]), { x, y }]);
      }
    }
  }

  const antiNodes = new Set<string>();
  [...antennas.keys()].forEach((frequency) => {
    for (let i = 0; i < antennas.get(frequency).length; i++) {
      for (let j = 0; j < antennas.get(frequency).length; j++) {
        if (i === j) {
          continue;
        }

        const dx = antennas.get(frequency)[j].x - antennas.get(frequency)[i].x;
        const dy = antennas.get(frequency)[j].y - antennas.get(frequency)[i].y;

        for (let k = -50; k <= 50; k++) {
          const antiNodeX = antennas.get(frequency)[i].x + dx * k;
          const antiNodeY = antennas.get(frequency)[i].y + dy * k;

          if (antiNodeX >= 0 && antiNodeX < width && antiNodeY >= 0 && antiNodeY < height) {
            antiNodes.add(`${antiNodeX},${antiNodeY}`);
          }
        }
      }
    }
  });
  return antiNodes.size;
};
