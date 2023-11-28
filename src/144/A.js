module.exports = {
  checkCountOfPermutations: (line) => {
    let min = 0;
    let max = 0;
    for (let i = 1; i < line.length; i++) {
      if (line[min] >= line[i]) {
        min = i;
      }
      if (line[max] < line[i]) {
        max = i;
      }
    }
    return line.length - min + max - (max > min ? 2 : 1);
  },
};
