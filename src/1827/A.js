/* eslint-disable max-depth */
module.exports = {
  getReordersCount: (array1, array2) => {
    array1.sort((a, b) => b - a);
    array2.sort((a, b) => b - a);

    let pointer1 = 0;
    let pointer2 = 0;
    let counter = 0;
    let maxReorderCount = -1;
    const M = 1000000007;

    if (
      array1[pointer1] > array2[pointer2] &&
      array1[array1.length - 1] > array2[array2.length - 1]
    ) {
      while (pointer2 < array2.length) {
        if (array1[pointer1] > array2[pointer2]) {
          counter++;
          pointer1++;
        } else {
          if (maxReorderCount === -1) {
            maxReorderCount = counter;
          } else {
            maxReorderCount = (maxReorderCount * (counter - pointer2)) % M;
          }
          pointer2++;
        }
      }
    } else {
      maxReorderCount = 0;
    }

    return maxReorderCount;
  },
};
