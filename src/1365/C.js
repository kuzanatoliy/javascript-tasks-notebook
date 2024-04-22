module.exports = {
  getMaxMatchingPairs: (arrA, arrB) => {
    const tempArr = new Array(arrA.length + 1).fill(-1);
    for (let j = 0; j < arrA.length; j++) {
      tempArr[arrA[j]] = j;
    }
    for (let j = 0; j < arrB.length; j++) {
      tempArr[arrB[j]] =
        tempArr[arrB[j]] > j
          ? tempArr[arrB[j]] - j
          : arrB.length - j + tempArr[arrB[j]];
    }

    const map = {};

    for (let j = 1; j < tempArr.length; j++) {
      map[tempArr[j]] = (map[tempArr[j]] || 0) + 1;
    }

    return Math.max(...Object.keys(map).map((item) => map[item]));
  },
};
