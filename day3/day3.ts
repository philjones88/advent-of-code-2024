const mulRegExPattern = /mul\((\d{1,3})\,(\d{1,3})\)/;
const instructionRegExPattern = /(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g;

const processInput = (rawInput: string): string[] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) => line.trim());

export const day3part1 = (rawInput: string) => {
  let result = 0;

  processInput(rawInput)
    .map((line) => line.match(instructionRegExPattern))
    .filter((matches) => matches)
    .map((matches) => {
      for (const instruction of matches) {
        if (mulRegExPattern.test(instruction)) {
          const [x, y] = instruction.match(/\d{1,3}/g).map(Number);
          result += x * y;
        }
      }
    });

  return result;
};

export const day3part2 = (rawInput: string) => {
  let result = 0;
  let allow = true;

  processInput(rawInput)
    .map((line) => line.match(instructionRegExPattern))
    .filter((matches) => matches)
    .map((matches) => {
      for (const instruction of matches) {
        if (mulRegExPattern.test(instruction)) {
          const [x, y] = instruction.match(/\d{1,3}/g).map(Number);
          if (allow) {
            result += x * y;
          }
        } else if (instruction === 'do()') {
          allow = true;
        } else if (instruction === "don't()") {
          allow = false;
        }
      }
    });

  return result;
};
