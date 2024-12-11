import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day11part1, day11part2 } from './day11';

test('Day 11 Part 1 Example', () => {
  const rawFile = readFileSync('day11/example.txt', 'utf-8');

  const result = day11part1(rawFile);

  expect(result).toBe(55312);
});

test('Day 11 Part 2 Example', () => {
  const rawFile = readFileSync('day11/example.txt', 'utf-8');

  const result = day11part2(rawFile);

  expect(result).toBe(65601038650482);
});
