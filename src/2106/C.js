module.exports = {
  getWaysCount: (arrA, arrB, k) => {
    let sum = -1;
    for (let i = 0; i < arrA.length; i++) {
      if (arrB[i] !== -1) {
        sum = arrA[i] + arrB[i];
        break;
      }
    }
    if (sum === -1) {
      arrA.sort((a, b) => a - b);
      return arrA[0] + k - arrA[arrA.length - 1] + 1;
    }
    for (let i = 0; i < arrA.length; i++) {
      if (
        (arrB[i] === -1 && (sum - arrA[i] > k || sum - arrA[i] < 0)) ||
        (arrB[i] !== -1 && arrB[i] + arrA[i] !== sum)
      ) {
        return 0;
      }
    }
    return 1;
  },
};
