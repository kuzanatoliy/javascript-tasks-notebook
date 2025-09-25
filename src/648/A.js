module.exports = {
  getMovements: (matrix) => {
    const counts = new Array(matrix[0].length).fill(0);
    for (let j = 0; j < matrix[0].length; j++) {
      for (let jj = 0; matrix[jj][j] === '.'; jj++) {
        counts[j]++;
      }
    }
    let c1 = 0;
    let c2 = 0;
    for (let c = 1; c < counts.length; c++) {
      if (counts[c - 1] > counts[c]) {
        c2 = Math.max(c2, counts[c - 1] - counts[c]);
      } else {
        c1 = Math.max(c1, counts[c] - counts[c - 1]);
      }
    }
    return [c2, c1];
  },
};
