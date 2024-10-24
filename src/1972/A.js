module.exports = {
  getCountOfOperations: (arrA, arrB) => {
    let index = 0;
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[index] <= arrB[j]) {
        index++;
      }
    }
    return arrB.length - index;
  },
};
