/* eslint-disable no-undefined */
module.exports = {
  getMinCountOfFloors: (arr) => {
    if (arr.length % 2 === 1) {
      let count = 0;
      for (let j = 1; j < arr.length; j += 2) {
        if (arr[j - 1] >= arr[j] || arr[j + 1] >= arr[j]) {
          count += Math.max(arr[j - 1] - arr[j], arr[j + 1] - arr[j]) + 1;
        }
      }
      return count;
    }
    const sums1 = [0];
    let sums2 = [0];
    for (let jj = 1; jj < arr.length - 1; jj += 2) {
      if (arr[jj - 1] >= arr[jj] || arr[jj + 1] >= arr[jj]) {
        sums1.push(
          sums1[sums1.length - 1] +
            Math.max(arr[jj - 1] - arr[jj], arr[jj + 1] - arr[jj]) +
            1
        );
      } else {
        sums1.push(sums1[sums1.length - 1]);
      }
    }
    for (let jjj = arr.length - 2; jjj > 0; jjj -= 2) {
      if (arr[jjj - 1] >= arr[jjj] || arr[jjj + 1] >= arr[jjj]) {
        sums2.push(
          sums2[sums2.length - 1] +
            Math.max(arr[jjj - 1] - arr[jjj], arr[jjj + 1] - arr[jjj]) +
            1
        );
      } else {
        sums2.push(sums2[sums2.length - 1]);
      }
    }
    sums2 = sums2.reverse();
    let min = sums1[0] + sums2[0];
    for (let k = 1; k < sums1.length; k++) {
      const d = sums1[k] + sums2[k];
      if (d < min) {
        min = d;
      }
    }
    return min;
  },
};
