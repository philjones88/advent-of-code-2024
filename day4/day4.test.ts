import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day4part1, day4part2 } from './day4';

test('Day 4 Part 1 Example', () => {
  const rawFile = readFileSync('day4/example.txt', 'utf-8');

  const result = day4part1(rawFile);

  expect(result).toEqual(18);
});

test('Day 4 Part 2 Example', () => {
  const rawFile = readFileSync('day4/example.txt', 'utf-8');

  const result = day4part2(rawFile);

  expect(result).toBe(9);
});
