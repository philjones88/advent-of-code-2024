import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day2part1, day2part2 } from './day2';

test('Day 2 Part 1 Example', () => {
  const rawFile = readFileSync('day2/example.txt', 'utf-8');

  const result = day2part1(rawFile);

  expect(result).toEqual(2);
});

test('Day 2 Part 2 Example', () => {
  const rawFile = readFileSync('day2/example.txt', 'utf-8');

  const result = day2part2(rawFile);

  expect(result).toBe(4);
});