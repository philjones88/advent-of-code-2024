const processInput = (rawInput: string): { firstSectionLines: string[]; secondSectionLines: string[] } => {
  const lines = rawInput
    .trim()
    .split('\n\n')
    .map((line) => line.trim());
  // console.log(lines);
  return {
    firstSectionLines: lines[0].split('\n').map((line) => line.trim()),
    secondSectionLines: lines[1].split('\n').map((line) => line.trim()),
  };
};

const makeRulesBook = (firstSectionLines: string[]): Map<number, number[]> => {
  const rulesBook = new Map<number, number[]>();
  for (const ruleLine of firstSectionLines) {
    const [number, marginalNumber] = ruleLine.split('|').map(Number);
    if (!rulesBook.has(number)) {
      rulesBook.set(number, []);
    }
    rulesBook.get(number).push(marginalNumber);
    rulesBook.get(number).sort((a, b) => a - b);
  }
  return rulesBook;
};

const correctAndIncorrectUpdates = (
  rulesBook: Map<number, number[]>,
  secondSectionLines: string[]
): { correctUpdates: number[][]; incorrectUpdates: number[][] } => {
  const correctUpdates: number[][] = [];
  const incorrectUpdates: number[][] = [];

  for (const updates of secondSectionLines) {
    const updatePages = updates.split(',').map(Number);

    let correctOrder = true;
    for (let i = 0; i < updatePages.length; i++) {
      const currentPage = updatePages[i];
      const rulesForCurrentPage = rulesBook.get(currentPage);

      if (!rulesForCurrentPage) {
        continue;
      }

      for (const rule of rulesForCurrentPage) {
        const marginalNumberIndex = updatePages.indexOf(rule);

        if (marginalNumberIndex === -1) {
          continue;
        }

        if (marginalNumberIndex < i) {
          correctOrder = false;
          break;
        }
      }

      if (!correctOrder) {
        break;
      }
    }

    if (correctOrder) {
      correctUpdates.push(updatePages);
    } else {
      incorrectUpdates.push(updatePages);
    }
  }
  return { correctUpdates, incorrectUpdates };
};

export const day5part1 = (rawInput: string) => {
  const rules = processInput(rawInput);

  return correctAndIncorrectUpdates(makeRulesBook(rules.firstSectionLines), rules.secondSectionLines)
    .correctUpdates.map((pages) => pages[Math.floor(pages.length / 2)])
    .reduce((acc, i) => acc + i, 0);
};

export const day5part2 = (rawInput: string) => {
  const rules = processInput(rawInput);

  const rulesBook = makeRulesBook(rules.firstSectionLines);

  const { incorrectUpdates } = correctAndIncorrectUpdates(rulesBook, rules.secondSectionLines);

  const correctedUpdates: number[][] = [];

  for (const incorrectUpdate of incorrectUpdates) {
    const correctedUpdate = [...incorrectUpdate];
    let swapsMade = false;

    do {
      swapsMade = false;

      for (let i = 0; i < correctedUpdate.length; i++) {
        const currentPage = correctedUpdate[i];
        const rulesForCurrentPage = rulesBook.get(currentPage);

        if (!rulesForCurrentPage) {
          continue;
        }

        for (const rule of rulesForCurrentPage) {
          const marginalNumberIndex = correctedUpdate.indexOf(rule);

          if (marginalNumberIndex !== -1 && marginalNumberIndex < i) {
            [correctedUpdate[i], correctedUpdate[marginalNumberIndex]] = [correctedUpdate[marginalNumberIndex], correctedUpdate[i]];
            swapsMade = true;
          }
        }
      }
    } while (swapsMade);

    correctedUpdates.push(correctedUpdate);
  }

  return correctedUpdates.map((updatePages) => updatePages[Math.floor(updatePages.length / 2)]).reduce((acc, i) => acc + i, 0);
};
