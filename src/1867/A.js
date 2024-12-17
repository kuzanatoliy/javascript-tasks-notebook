module.exports = {
  getPermutation: (array) => {
    const arr = array
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0]);
    const res = new Array(arr.length);
    let num = arr.length;
    for (let j = 0; j < arr.length; j++) {
      res[arr[j][1]] = num;
      num--;
    }
    return res;
  },
};
