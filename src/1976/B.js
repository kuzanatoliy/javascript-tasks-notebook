module.exports = {
  getOperationCount: (arrA, arrB) => {
    let count = 0;
    let add = Infinity;
    for (let j = 0; j < arrA.length; j++) {
      const max = Math.max(arrA[j], arrB[j]);
      const min = Math.min(arrA[j], arrB[j]);
      count += max - min;
      if (arrB[arrB.length - 1] >= min && arrB[arrB.length - 1] <= max) {
        add = 0;
      } else {
        add = Math.min(
          add,
          Math.abs(arrB[arrB.length - 1] - arrA[j]),
          Math.abs(arrB[arrB.length - 1] - arrB[j])
        );
      }
    }
    return count + add + 1;
  },
};
