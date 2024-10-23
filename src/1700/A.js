module.exports = {
  getMinCost: (column, row) => {
    let step = 0;
    let cost = 0;
    for (let j = 0; j < row; j++) {
      step += 1;
      cost += step;
    }
    for (let jj = 1; jj < column; jj++) {
      step += row;
      cost += step;
    }
    return cost;
  },
};
