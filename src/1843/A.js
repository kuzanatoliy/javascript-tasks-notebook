module.exports = {
  getMaxCost: (array) => {
    array.sort((a, b) => a - b);
    let j = 0;
    let jj = array.length - 1;
    let cost = 0;
    while (j < jj) {
      cost += array[jj] - array[j];
      j++;
      jj--;
    }
    return cost;
  },
};
