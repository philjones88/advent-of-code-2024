import { readFileSync } from 'fs';
import { day9part1, day9part2 } from './day9';

const rawFile = readFileSync('day9/input.txt', 'utf-8');

console.log('PART 1 = ', day9part1(rawFile));

console.log('PART 2 = ', day9part2(rawFile));