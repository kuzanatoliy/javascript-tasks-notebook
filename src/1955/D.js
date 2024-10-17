/* eslint-disable max-depth */
module.exports = {
  getCountOfSubarrays: (arrA, arrB, k) => {
    const mp = new Map();
    for (let j = 0; j < arrB.length; j++) {
      mp.set(arrB[j], (mp.get(arrB[j]) || 0) + 1);
    }
    let cnt = 0;
    let res = 0;
    for (let i = 0; i < arrA.length; i++) {
      if (mp.has(arrA[i])) {
        mp.set(arrA[i], (mp.get(arrA[i]) || 0) - 1);
      }
      if (mp.has(arrA[i]) && mp.get(arrA[i]) >= 0) {
        cnt++;
      }
      if (i >= arrB.length) {
        const sv = arrA[i - arrB.length];
        if (mp.has(sv)) {
          mp.set(sv, (mp.get(sv) || 0) + 1);
          if (mp.get(sv) > 0) {
            cnt--;
          }
        }
      }
      if (i >= arrB.length - 1) {
        if (cnt >= k) {
          res++;
        }
      }
    }
    return res;
  },
};
