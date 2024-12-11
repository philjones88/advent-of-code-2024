const processInput = (rawInput: string): number[] => rawInput.trim().split(' ').map(Number);

const blinkStones = (blinkCount: number, stones: number[]): number => {
  let stoneCount = new Map<number, number>();
  const cache = new Map<number, number[]>();

  for (const stone of stones) {
    stoneCount.set(stone, 1);
  }

  for (let i = 0; i < blinkCount; i++) {
    const newStones = new Map<number, number>();

    for (const [stone, occurrence] of stoneCount) {
      if (stone === 0) {
        newStones.set(1, (newStones.get(1) || 0) + occurrence);
        continue;
      }

      if (cache.has(stone)) {
        for (const newStone of cache.get(stone)) {
          newStones.set(newStone, (newStones.get(newStone) || 0) + occurrence);
        }
        continue;
      }

      const stoneString = stone.toString();

      if (stoneString.length % 2 === 0) {
        const stone1 = stoneString.slice(0, stoneString.length / 2);
        const stone2 = stoneString.slice(stoneString.length / 2);

        newStones.set(Number(stone1), (newStones.get(Number(stone1)) || 0) + occurrence);
        newStones.set(Number(stone2), (newStones.get(Number(stone2)) || 0) + occurrence);

        cache.set(stone, [Number(stone1), Number(stone2)]);

        continue;
      }

      newStones.set(stone * 2024, (newStones.get(stone * 2024) || 0) + occurrence);

      cache.set(stone, [stone * 2024]);
    }

    stoneCount = newStones;
  }

  return [...stoneCount.values()].reduce((acc, i) => acc + i, 0);
};

export const day11part1 = (rawInput: string) => blinkStones(25, processInput(rawInput));

export const day11part2 = (rawInput: string) => blinkStones(75, processInput(rawInput));
