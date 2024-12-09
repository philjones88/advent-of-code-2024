import { readFileSync } from 'fs';
import { day8part1, day8part2 } from './day8';

const rawFile = readFileSync('day8/input.txt', 'utf-8');

console.log('PART 1 = ', day8part1(rawFile));

console.log('PART 2 = ', day8part2(rawFile));