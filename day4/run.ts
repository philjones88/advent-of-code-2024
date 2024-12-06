import { readFileSync } from 'fs';
import { day4part1, day4part2 } from './day4';

const rawFile = readFileSync('day4/input.txt', 'utf-8');

console.log('PART 1 = ', day4part1(rawFile));

console.log('PART 2 = ', day4part2(rawFile));
