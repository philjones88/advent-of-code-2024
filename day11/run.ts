import { readFileSync } from 'fs';
import { day11part1, day11part2 } from './day11';

const rawFile = readFileSync('day11/input.txt', 'utf-8');

console.log('PART 1 = ', day11part1(rawFile));

console.log('PART 2 = ', day11part2(rawFile));
