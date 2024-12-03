import { readFileSync } from 'fs';
import { day2part1, day2part2 } from './day2';

const rawFile = readFileSync('day2/input.txt', 'utf-8');

console.log('PART 1 = ', day2part1(rawFile));

console.log('PART 2 = ', day2part2(rawFile));