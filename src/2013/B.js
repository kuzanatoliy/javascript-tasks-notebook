module.exports = {
  getMaxRating: (arr) => {
    let res = 0;

    for (let j = 0; j < arr.length - 2; j++) {
      res += arr[j];
    }

    return res - arr[arr.length - 2] + arr[arr.length - 1];
  },
};
