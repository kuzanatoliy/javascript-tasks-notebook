module.exports = {
  getCountsOfBooks: (arrA, arrB) => {
    const counts = new Array(arrA.length);
    for (let j = 0; j < arrA.length; j++) {
      counts[arrA[j] - 1] = j + 1;
    }
    let curr = 0;
    const res = [];
    for (let jj = 0; jj < arrB.length; jj++) {
      res.push(Math.max(counts[arrB[jj] - 1] - curr, 0));
      curr = Math.max(curr, counts[arrB[jj] - 1]);
    }
    return res;
  },
};
