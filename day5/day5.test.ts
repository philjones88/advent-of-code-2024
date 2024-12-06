import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day5part1, day5part2 } from './day5';

test('Day 5 Part 1 Example', () => {
  const rawFile = readFileSync('day5/example.txt', 'utf-8');

  const result = day5part1(rawFile);

  expect(result).toEqual(143);
});

test('Day 5 Part 2 Example', () => {
  const rawFile = readFileSync('day5/example.txt', 'utf-8');

  const result = day5part2(rawFile);

  expect(result).toBe(123);
});
