import { readFileSync } from 'fs';
import { day10part1, day10part2 } from './day10';

const rawFile = readFileSync('day10/input.txt', 'utf-8');

console.log('PART 1 = ', day10part1(rawFile));

console.log('PART 2 = ', day10part2(rawFile));
