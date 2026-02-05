module.exports = {
  getMaxSums: (arrA, arrB, queries) => {
    const temp = new Array(arrA.length);
    temp[arrA.length - 1] = Math.max(
      arrA[arrA.length - 1],
      arrB[arrB.length - 1]
    );
    for (let j = temp.length - 2; j >= 0; j--) {
      temp[j] = Math.max(temp[j + 1], arrA[j], arrB[j]);
    }
    for (let jj = 1; jj < temp.length; jj++) {
      temp[jj] += temp[jj - 1];
    }
    const sums = [];
    for (let q = 0; q < queries.length; q++) {
      sums.push(temp[queries[q][1] - 1] - (temp[queries[q][0] - 2] || 0));
    }
    return sums;
  },
};
