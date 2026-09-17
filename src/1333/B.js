/* eslint-disable max-depth */
/* eslint-disable complexity */
module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    if (arrA[0] !== arrB[0]) {
      return 'NO';
    }
    let addPos = -1;
    let rmvPos = -1;
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] === 1 && addPos === -1) {
        addPos = i;
      }
      if (arrA[i] === -1 && rmvPos === -1) {
        rmvPos = i;
      }

      if (addPos !== -1 && rmvPos !== -1) {
        break;
      }
    }

    for (let i = 1; i < arrB.length; i++) {
      if (arrB[i] !== arrA[i]) {
        if (arrB[i] > arrA[i]) {
          if (addPos === -1 || addPos >= i) {
            return 'NO';
          }
        }
        if (arrB[i] < arrA[i]) {
          if (rmvPos === -1 || rmvPos >= i) {
            return 'NO';
          }
        }
      }
    }
    return 'YES';
  },
};
