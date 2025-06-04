module.exports = {
  getMaxMexSum: (array) => {
    const arr = new Array(101).fill(0);
    for (let j = 0; j < array.length; j++) {
      arr[array[j]]++;
    }
    let sum = 0;
    let jj = 0;
    while (arr[jj] >= 2) {
      jj++;
    }
    sum += jj;
    while (arr[jj] >= 1) {
      jj++;
    }
    sum += jj;
    return sum;
  },
};
