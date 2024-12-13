import { readFileSync } from 'fs';
import { day12part1, day12part2 } from './day12';

const rawFile = readFileSync('day12/input.txt', 'utf-8');

console.log('PART 1 = ', day12part1(rawFile));

console.log('PART 2 = ', day12part2(rawFile));