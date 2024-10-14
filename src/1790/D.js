/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfSets: (array) => {
    const map = new Map();
    for (let j = 0; j < array.length; j++) {
      if (map.has(array[j])) {
        map.set(array[j], map.get(array[j]) + 1);
      } else {
        map.set(array[j], 1);
      }
    }
    const arr = Array.from(map).sort((a, b) => a[0] - b[0]);
    let curr = arr[0][1];
    let count = curr;
    for (let jj = 1; jj < arr.length; jj++) {
      if (arr[jj][0] - arr[jj - 1][0] > 1) {
        curr = 0;
      }
      const d = arr[jj][1] - curr;
      if (d > 0) {
        count += d;
      }
      curr = arr[jj][1];
    }
    return count;
  },
};
