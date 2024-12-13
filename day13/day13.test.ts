import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day13part1, day13part2 } from './day13';

test('Day 13 Part 1 Example', () => {
  const rawFile = readFileSync('day13/example.txt', 'utf-8');

  const result = day13part1(rawFile);

  expect(result).toBe(480);
});

test('Day 13 Part 2 Example', () => {
  const rawFile = readFileSync('day13/example.txt', 'utf-8');

  const result = day13part2(rawFile);

  expect(result).toBe(875318608908);
});
