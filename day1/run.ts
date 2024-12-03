import { readFileSync } from 'fs';
import { day1part1, day1part2 } from './day1';

const rawFile = readFileSync('day1/input.txt', 'utf-8');

console.log('PART 1 = ', day1part1(rawFile));

console.log('PART 2 = ', day1part2(rawFile));