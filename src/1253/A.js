module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    let l = 0;
    let r = arrA.length - 1;
    while (l < arrA.length && arrA[l] === arrB[l]) {
      l++;
    }
    while (r > l && arrA[r] === arrB[r]) {
      r--;
    }
    const d = arrB[l] - arrA[l];
    if (d < 0) {
      return 'NO';
    }
    for (let j = l + 1; j <= r; j++) {
      const dd = arrB[j] - arrA[j];
      if (d !== dd) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
