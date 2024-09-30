module.exports = {
  getTheBestMovie: (arrA, arrB, k) => {
    let index = 1;
    let [ent] = arrB;
    let flag = arrA[0] <= k;
    for (let j = 1; j < arrA.length; j++) {
      const len = arrA[j] + j;
      if (len <= k) {
        const e = arrB[j];
        if (!flag) {
          flag = true;
          ent = e;
          index = j + 1;
        } else if (e > ent) {
          ent = e;
          index = j + 1;
        }
      }
    }
    return flag ? index : -1;
  },
};
