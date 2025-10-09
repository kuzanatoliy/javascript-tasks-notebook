module.exports = {
  getMaxSum: (arrA, arrB) => {
    let ma = Math.max(arrA[0], 0);
    for (let i = 1; i < arrA.length; i++) {
      arrA[i] -= -arrA[i - 1];
      if (arrA[i] > ma) {
        ma = arrA[i];
      }
    }

    let mb = Math.max(arrB[0], 0);
    for (let i = 1; i < arrB.length; i++) {
      arrB[i] -= -arrB[i - 1];
      if (arrB[i] > mb) {
        mb = arrB[i];
      }
    }

    return ma + mb;
  },
};
