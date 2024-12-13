const processInput = (rawInput: string): number[][] =>
  rawInput
    .split('\n\n')
    .map((group) => group.split('\n'))
    .map((line) => {
      const [ax, ay] = /Button A: X\+([0-9]+), Y\+([0-9]+)/
        .exec(line[0])!
        .slice(1)
        .map((x) => parseInt(x.trim()));
      const [bx, by] = /Button B: X\+([0-9]+), Y\+([0-9]+)/
        .exec(line[1])!
        .slice(1)
        .map((x) => parseInt(x.trim()));
      const [x, y] = /Prize: X=([0-9]+), Y=([0-9]+)/
        .exec(line[2])!
        .slice(1)
        .map((x) => parseInt(x.trim()));

      return [ax, ay, bx, by, x, y];
    });

const compute = (machines: number[][], offset: number) =>
  machines
    .map(([ax, ay, bx, by, _x, _y]) => {
      const [x, y] = [offset + _x, offset + _y];
      const d = ax * by - ay * bx;
      const da = by * x - bx * y;
      const db = ax * y - ay * x;

      if (d === 0) {
        // 0 or an infinite?
        return 0;
      } else if (da % d === 0 && db % d === 0) {
        return 3 * (da / d) + db / d;
      } else {
        // no solution?
        return 0;
      }
    })
    .reduce((acc, i) => acc + i, 0);

export const day13part1 = (rawInput: string) => compute(processInput(rawInput), 0);

export const day13part2 = (rawInput: string) => compute(processInput(rawInput), 10000000000000);
