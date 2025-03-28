module.exports = {
  getNumber: (array) => {
    let c1 = 0;
    let c2 = 0;
    const arr = array.map((item) => Math.abs(item)).sort((a, b) => b - a);
    for (let j = 0; j < array.length; j++) {
      if (array[j] > 0) {
        c1++;
      } else if (array[j] < 0) {
        c2++;
      }
    }
    let max = 1000;
    for (let jj = 0; jj < arr.length; jj++) {
      if (arr[jj] === max) {
        max--;
      }
    }
    const d = arr.length / 2;
    if (c1 >= d) {
      return max;
    } else if (c2 >= d) {
      return -max;
    } else {
      return 0;
    }
  },
};
