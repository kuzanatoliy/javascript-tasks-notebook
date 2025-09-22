module.exports = {
  getMap: (num, arrA, arrB) => {
    const arr = new Array(num).fill(1);
    for (let j = 0; j < arrB.length; j++) {
      arr[arrB[j] - 1] = 2;
    }
    return arr;
  },
};
