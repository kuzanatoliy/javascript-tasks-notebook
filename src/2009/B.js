module.exports = {
  getColumns: (rows) => {
    const res = [];
    for (let j = 0; j < rows.length; j++) {
      for (let jj = 0; jj < rows[j].length; jj++) {
        if (rows[j][jj] === '#') {
          res.push(jj + 1);
          break;
        }
      }
    }
    return res.reverse();
  },
};
