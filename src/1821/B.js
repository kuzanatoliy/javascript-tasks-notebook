module.exports = {
  getSubarrLimits: (arrA, arrB) => {
    let l = 0;
    while (arrA[l] === arrB[l]) {
      l++;
    }
    let r = arrA.length - 1;
    while (arrA[r] === arrB[r]) {
      r--;
    }
    while (arrB[l] >= arrB[l - 1]) {
      l--;
    }
    while (arrB[r] <= arrB[r + 1]) {
      r++;
    }
    return l < r ? [l + 1, r + 1] : [1, arrA.length];
  },
};
