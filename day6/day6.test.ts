import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day6part1, day6part2 } from './day6';

test('Day 6 Part 1 Example', () => {
  const rawFile = readFileSync('day6/example.txt', 'utf-8');

  const result = day6part1(rawFile);

  expect(result).toEqual(41);
});

test('Day 6 Part 2 Example', () => {
  const rawFile = readFileSync('day6/example.txt', 'utf-8');

  const result = day6part2(rawFile);

  expect(result).toBe(6);
});
