import { readFileSync } from 'fs';
import { expect, test } from 'vitest';

import { day7part1, day7part2 } from './day7';

test('Day 7 Part 1 Example', () => {
  const rawFile = readFileSync('day7/example.txt', 'utf-8');

  const result = day7part1(rawFile);

  expect(result).toBe(3749);
});

test('Day 7 Part 2 Example', () => {
  const rawFile = readFileSync('day7/example.txt', 'utf-8');

  const result = day7part2(rawFile);

  expect(result).toBe(11387);
});
