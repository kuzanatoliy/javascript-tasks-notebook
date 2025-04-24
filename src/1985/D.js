module.exports = {
  getCenter: (matrix) => {
    const rows = new Array(matrix.length).fill(0);
    const cols = new Array(matrix[0].length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === '#') {
          rows[j]++;
          cols[jj]++;
        }
      }
    }
    let mr = 0;
    for (let r = 0; r < rows.length; r++) {
      if (rows[mr] < rows[r]) {
        mr = r;
      }
    }
    let mc = 0;
    for (let c = 0; c < cols.length; c++) {
      if (cols[mc] < cols[c]) {
        mc = c;
      }
    }
    return [mr + 1, mc + 1];
  },
};
