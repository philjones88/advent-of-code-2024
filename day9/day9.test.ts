import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day9part1, day9part2 } from './day9';

test('Day 9 Part 1 Example', () => {
  const rawFile = readFileSync('day9/example.txt', 'utf-8');

  const result = day9part1(rawFile);

  expect(result).toBe(1928);
});

test('Day 9 Part 2 Example', () => {
  const rawFile = readFileSync('day9/example.txt', 'utf-8');

  const result = day9part2(rawFile);

  expect(result).toBe(2858);
});
