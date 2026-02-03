module.exports = {
  getWinner: (arrA, arrB) => {
    if (arrA[0] === arrB[0]) {
      for (let j = 1; j < arrA.length; j++) {
        if (arrA[j] !== arrB[j]) {
          return 'Alice';
        }
      }
      return 'Bob';
    } else if (arrA[0] === arrB[arrB.length - 1]) {
      for (let jj = 1; jj < arrA.length; jj++) {
        if (arrA[jj] !== arrB[arrB.length - 1 - jj]) {
          return 'Alice';
        }
      }
      return 'Bob';
    }
    return 'Alice';
  },
};
