import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day1part1, day1part2 } from './day1';

test('Day 1 Part 1 Example', () => {
  const rawFile = readFileSync('day1/example.txt', 'utf-8');

  const result = day1part1(rawFile);

  expect(result).toEqual(11);
});

test('Day 1 Part 2 Example', () => {
  const rawFile = readFileSync('day1/example.txt', 'utf-8');

  const result = day1part2(rawFile);

  expect(result).toBe(31);
});