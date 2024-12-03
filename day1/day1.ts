const processInput = (rawInput: string): number[][] =>
  rawInput
    .trim()
    .split("\n")
    .map((pair) => pair.split("   ").map(Number));

const computeListFrequencies = (lists: number[][]): Map<number, number> => {
  const rightListFrequency = new Map<number, number>();

  for (let i = 0; i < lists.length; i++) {
    const [_, right] = lists[i];

    if (rightListFrequency.has(right)) {
      rightListFrequency.set(right, rightListFrequency.get(right) + 1);
    } else {
      rightListFrequency.set(right, 1);
    }
  }

  return rightListFrequency;
};

export const day1part1 = (rawInput: string) => {
  const lists = processInput(rawInput);

  const sortedLists = lists.slice().sort((a, b) => a[0] - b[0]);
  const leftListSorted = sortedLists.map((pair) => pair[0]);
  const rightListSorted = lists.map((pair) => pair[1]).sort((a, b) => a - b);

  let distanceBetween = 0;

  for (let i = 0; i < lists.length; i++) {
    distanceBetween += Math.abs(rightListSorted[i] - leftListSorted[i]);
  }

  return distanceBetween;
};

export const day1part2 = (rawInput: string) => {
  const lists = processInput(rawInput);

  const rightListFrequency = computeListFrequencies(lists);

  return lists.reduce((acc, [left]) => {
    const freq = rightListFrequency.get(left) || 0;
    return acc + left * freq;
  }, 0);
};
