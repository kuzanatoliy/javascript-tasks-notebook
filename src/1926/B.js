module.exports = {
  recognizeFigure: (matrix) => {
    let prev = 0;
    for (let j = 0; j < matrix.length; j++) {
      const sum = matrix[j].reduce((lsum, next) => lsum + next);
      if (prev !== 0) {
        return prev === sum ? 'SQUARE' : 'TRIANGLE';
      }
      prev = sum;
    }
    return 'SQUARE';
  },
};
