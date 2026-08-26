const M = 1000000007;

module.exports = {
  getMaxSum: (k, arr) => {
    const maxInt = 2 ** 53;
    let maxSoFar = -maxInt - 1;
    let maxEndingHere = 0;

    let arraySum = 0;
    for (let j = 0; j < arr.length; j++) {
      arraySum += arr[j];
      maxEndingHere += arr[j];
      if (maxSoFar < maxEndingHere) {
        maxSoFar = maxEndingHere;
      }

      if (maxEndingHere < 0) {
        maxEndingHere = 0;
      }
    }

    if (maxSoFar < 0) {
      maxSoFar = 0;
    }

    while (k > 0) {
      arraySum += ((maxSoFar % M) + M) % M;
      maxSoFar += ((maxSoFar % M) + M) % M;
      k--;
    }

    return ((arraySum % M) + M) % M;
  },
};
