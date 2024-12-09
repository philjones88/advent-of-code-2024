import { readFileSync } from 'fs';
import { day6part1, day6part2 } from './day6';

const rawFile = readFileSync('day6/input.txt', 'utf-8');

console.log('PART 1 = ', day6part1(rawFile));

console.log('PART 2 = ', day6part2(rawFile));