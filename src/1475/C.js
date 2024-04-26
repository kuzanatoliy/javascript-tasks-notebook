module.exports = {
  getNumbersOfWays: (a, b, k, arr1, arr2) => {
    let res = 0;
    const cntA = Array(a).fill(0);
    const cntB = Array(b).fill(0);

    arr1.forEach((el, ind) => {
      cntA[el - 1]++;
      cntB[arr2[ind] - 1]++;
    });
    arr1.forEach((el, ind) => {
      res += k - (cntA[el - 1] + cntB[arr2[ind] - 1] - 1);
    });

    return Math.floor(res / 2);
  },
};
