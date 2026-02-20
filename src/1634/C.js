module.exports = {
  isItPossibleToBuildMatrix: (num, k) => {
    const d = num * k;
    const even = Math.floor(d / 2);
    if (even % k) {
      return ['NO'];
    }
    const matrix = [[]];
    for (let j = 1; j <= d; j += 2) {
      if (matrix[matrix.length - 1].length === k) {
        matrix.push([]);
      }
      matrix[matrix.length - 1].push(j);
    }
    for (let jj = 2; jj <= d; jj += 2) {
      if (matrix[matrix.length - 1].length === k) {
        matrix.push([]);
      }
      matrix[matrix.length - 1].push(jj);
    }
    return ['YES', matrix];
  },
};
