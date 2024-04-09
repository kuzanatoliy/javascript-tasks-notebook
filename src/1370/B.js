module.exports = {
  getPairs: (array) => {
    const c = array.length / 2 - 1;
    const oddNumbers = [];
    const evenNumbers = [];
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 0) {
        evenNumbers.push([array[j], j]);
      } else {
        oddNumbers.push([array[j], j]);
      }
    }
    const res = [];
    let jj = 0;
    for (let j = 0; j < evenNumbers.length - 1 && jj < c; j += 2, jj++) {
      res.push([evenNumbers[j][1] + 1, evenNumbers[j + 1][1] + 1]);
    }
    for (let j = 0; j < oddNumbers.length && jj < c; j += 2, jj++) {
      res.push([oddNumbers[j][1] + 1, oddNumbers[j + 1][1] + 1]);
    }
    return res;
  },
};
