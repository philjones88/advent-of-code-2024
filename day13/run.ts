import { readFileSync } from 'fs';
import { day13part1, day13part2 } from './day13';

const rawFile = readFileSync('day13/input.txt', 'utf-8');

console.log('PART 1 = ', day13part1(rawFile));

console.log('PART 2 = ', day13part2(rawFile));