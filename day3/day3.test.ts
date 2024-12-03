import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day3part1, day3part2 } from './day3';

test('Day 3 Part 1 Example', () => {
  const rawFile = readFileSync('day3/example.txt', 'utf-8');

  const result = day3part1(rawFile);

  expect(result).toEqual(161);
});

test('Day 3 Part 2 Example', () => {
  const rawFile = readFileSync('day3/example2.txt', 'utf-8');

  const result = day3part2(rawFile);

  expect(result).toBe(48);
});
