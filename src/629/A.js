/* eslint-disable no-undefined */
module.exports = {
  getMaxCountOfPairs: (matrix) => {
    const rows = new Array(matrix.length).fill(0);
    const cols = new Array(matrix.length).fill(0);
    let count = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix.length; jj++) {
        if (matrix[j][jj] === 'C') {
          rows[j]++;
          cols[jj]++;
        }
      }
    }
    const store = [0, 0, 1];
    count = 0;
    for (let r = 0; r < rows.length; r++) {
      while (store[rows[r]] === undefined) {
        store[store.length] = store[store.length - 1] + store.length - 1;
      }
      count += store[rows[r]];
    }
    for (let c = 0; c < cols.length; c++) {
      while (store[cols[c]] === undefined) {
        store[store.length] = store[store.length - 1] + store.length - 1;
      }
      count += store[cols[c]];
    }
    return count;
  },
};
