const processInput = (rawInput: string): number[][] =>
  rawInput
    .trim()
    .split('\n')
    .map((line) =>
      line
        .trim()
        .split(' ')
        .map((e) => Number(e))
    );

const isReportSafe = (report: number[]): boolean => {
  let allIncreasing = null;

  for (let i = 0; i < report.length - 1; i++) {
    const level = report[i];
    const nextLevel = report[i + 1];
    const diff = nextLevel - level;

    const diffAbs = Math.abs(diff);

    if (diffAbs < 1 || diffAbs > 3) {
      return false;
    }

    if (allIncreasing === null) {
      allIncreasing = diff > 0;
    } else if ((allIncreasing && diff < 0) || (!allIncreasing && diff > 0)) {
      return false;
    }
  }

  return true;
};

export const day2part1 = (rawInput: string) =>
  processInput(rawInput)
    .map((report) => isReportSafe(report))
    .filter((report) => report).length;

export const day2part2 = (rawInput: string) =>
  processInput(rawInput)
    .map((report) => {
      if (isReportSafe(report)) {
        return true;
      }
      let dampenedSafe = false;
      for (let i = 0; i < report.length; i++) {
        const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
        if (isReportSafe(modifiedReport)) {
          dampenedSafe = true;
          break;
        }
      }
      if (dampenedSafe) {
        return true;
      }
      return false;
    })
    .filter((report) => report).length;
