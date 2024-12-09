import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day8part1, day8part2 } from './day8';

test('Day 8 Part 1 Example', () => {
  const rawFile = readFileSync('day8/example.txt', 'utf-8');

  const result = day8part1(rawFile);

  expect(result).toBe(14);
});

test('Day 8 Part 2 Example', () => {
  const rawFile = readFileSync('day8/example.txt', 'utf-8');

  const result = day8part2(rawFile);

  expect(result).toBe(34);
});
