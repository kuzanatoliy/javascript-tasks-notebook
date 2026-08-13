/* eslint-disable prefer-destructuring */
/* eslint-disable max-depth */
module.exports = {
  isItPossibleToTransform: (arr) => {
    let ff = 1;
    for (let j = arr.length - 2; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        const arr3 = arr[j]
          .toString()
          .split('')
          .map((a) => +a);
        let f = 0;
        for (let jj = 0; jj <= arr3.length - 1; jj++) {
          if (arr3[jj] > arr3[jj + 1]) {
            f = 1;
            break;
          }
        }
        if (f || arr3[arr3.length - 1] > arr[j + 1]) {
          ff = 0;
          break;
        }

        arr[j] = arr3[0];
      }
    }
    return ff === 1 ? 'YES' : 'NO';
  },
};
