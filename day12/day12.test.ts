import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day12part1, day12part2 } from './day12';

test('Day 12 Part 1 Example', () => {
  const rawFile = readFileSync('day12/example.txt', 'utf-8');

  const result = day12part1(rawFile);

  expect(result).toBe(1930);
});

test('Day 12 Part 2 Example', () => {
  const rawFile = readFileSync('day12/example.txt', 'utf-8');

  const result = day12part2(rawFile);

  expect(result).toBe(1206);
});
