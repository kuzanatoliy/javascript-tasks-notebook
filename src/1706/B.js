/* eslint-disable no-undefined */
module.exports = {
  getMaxSizes: (arr) => {
    const res = new Array(arr.length).fill(0);
    const last = new Array(arr.length);

    for (let j = 0; j < arr.length; j++) {
      if (last[arr[j] - 1] === undefined) {
        last[arr[j] - 1] = j;
        res[arr[j] - 1]++;
      }
    }

    for (let i = 1; i < arr.length; i++) {
      if ((i - 1 - last[arr[i] - 1]) % 2 === 0) {
        res[arr[i] - 1]++;
      }
      last[arr[i] - 1] = i;
    }

    return res;
  },
};
