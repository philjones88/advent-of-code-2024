import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day10part1, day10part2 } from './day10';

test('Day 10 Part 1 Example', () => {
  const rawFile = readFileSync('day10/example.txt', 'utf-8');

  const result = day10part1(rawFile);

  expect(result).toBe(36);
});

test('Day 10 Part 2 Example', () => {
  const rawFile = readFileSync('day10/example.txt', 'utf-8');

  const result = day10part2(rawFile);

  expect(result).toBe(81);
});
