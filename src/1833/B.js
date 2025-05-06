module.exports = {
  getRealData: (arrA, arrB) => {
    arrB.sort((a, b) => a - b);
    const arr = arrA
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0]);
    const res = new Array(arr.length);
    for (let j = 0; j < arr.length; j++) {
      res[arr[j][1]] = arrB[j];
    }
    return res;
  },
};
