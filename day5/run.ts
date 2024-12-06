import { readFileSync } from 'fs';
import { day5part1, day5part2 } from './day5';

const rawFile = readFileSync('day5/input.txt', 'utf-8');

console.log('PART 1 = ', day5part1(rawFile));

console.log('PART 2 = ', day5part2(rawFile));
