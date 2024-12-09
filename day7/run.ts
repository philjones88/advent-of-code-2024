import { readFileSync } from 'fs';
import { day7part1, day7part2 } from './day7';

const rawFile = readFileSync('day7/input.txt', 'utf-8');

console.log('PART 1 = ', day7part1(rawFile));

console.log('PART 2 = ', day7part2(rawFile));