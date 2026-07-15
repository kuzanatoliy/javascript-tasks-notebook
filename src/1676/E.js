module.exports = {
  getCandiesCount: (arr, queries) => {
    arr.sort((a, b) => b - a);
    const temp = queries
      .map((item, ind) => [item, ind, -1])
      .sort((a, b) => a[0] - b[0]);
    let j = 0;
    let q = 0;
    let curr = 0;
    while (j < arr.length && q < temp.length) {
      if (curr < temp[q][0]) {
        curr += arr[j];
        j++;
      } else {
        temp[q][2] = j;
        q++;
      }
    }
    while (q < temp.length && temp[q][0] <= curr) {
      temp[q][2] = arr.length;
      q++;
    }
    return temp.sort((a, b) => a[1] - b[1]).map((item) => item[2]);
  },
};
