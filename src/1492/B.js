/* eslint-disable prefer-destructuring */
module.exports = {
  reorder: (arr) => {
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => b[0] - a[0]);
    const res = [];
    for (let j = 0; j < temp.length; j++) {
      let jj = temp[j][1];
      while (arr[jj]) {
        res.push(arr[jj]);
        arr[jj] = 0;
        jj++;
      }
    }
    return res;
  },
};
