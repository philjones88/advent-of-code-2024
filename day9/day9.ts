export const day9part1 = (rawInput: string) => {
  let fileSystem: number[] = [];
  let file = 0;

  // create initial file system
  for (let i = 0; i < rawInput.length; i++) {
    for (let j = 0; j < parseInt(rawInput[i]); j++) {
      fileSystem.push(i % 2 === 0 ? file : -1);
    }
    if (i % 2 === 0) {
      file++;
    }
  }

  let bottom = 0;
  let top = fileSystem.length - 1;

  while (bottom < top) {
    if (fileSystem[bottom] === -1) {
      while (fileSystem[top] === -1) {
        top--;
      }

      // todo: this edge case fixer?
      if (top < bottom) {
        break;
      }
      fileSystem[bottom] = fileSystem[top];
      fileSystem[top] = -1;
    }
    bottom++;
  }

  let result = 0;
  for (let i = 0; i < fileSystem.length; i++) {
    if (fileSystem[i] === -1) {
      break;
    }
    result += fileSystem[i] * i;
  }
  return result;
};

export const day9part2 = (rawInput: string) => {
  let file = 0;
  let fileSystem: { file: number; count: number }[] = rawInput.split('').map((l, i) => {
    if (i % 2 == 0) {
      return { file: file++, count: parseInt(l) };
    } else {
      return { file: -1, count: parseInt(l) };
    }
  });

  let reducedFileSystem: { file: number; count: number }[] = [];

  for (let i = 0; i < fileSystem.length; i++) {
    if (fileSystem[i].file === -1) {
      let scan = fileSystem.length - 1;
      while (fileSystem[i].count > 0 && scan > i) {
        if (fileSystem[scan].file != -1 && fileSystem[scan].count <= fileSystem[i].count) {
          reducedFileSystem.push({ ...fileSystem[scan] });
          fileSystem[i].count -= fileSystem[scan].count;
          fileSystem[scan].file = -1;
          scan = fileSystem.length - 1;
        }
        scan--;
      }

      if (fileSystem[i].count != 0) {
        reducedFileSystem.push(fileSystem[i]);
      }
    } else if (fileSystem[i].count != 0) {
      reducedFileSystem.push({ ...fileSystem[i] });
    }
  }

  let result = 0;
  let i = 0;
  let current = reducedFileSystem.shift();
  while (reducedFileSystem.length != 0) {
    if (current === undefined) {
      break;
    }

    if (current.file !== -1) {
      result += current.file * i++;
      current.count--;
    } else {
      i += current.count;
      current.count = 0;
    }

    if (current.count === 0) {
      current = reducedFileSystem.shift();
    }
  }

  return result;
};
