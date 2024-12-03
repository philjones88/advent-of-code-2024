import { readFileSync } from 'fs';
import { day3part1, day3part2 } from './day3';

const rawFile = readFileSync('day3/input.txt', 'utf-8');

console.log('PART 1 = ', day3part1(rawFile));

console.log('PART 2 = ', day3part2(rawFile));
