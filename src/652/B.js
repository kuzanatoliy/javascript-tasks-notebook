module.exports = {
  zSort: (arr) => {
    arr.sort((a, b) => a - b);
    const res = [];
    for (let j = 0; j < arr.length / 2; j++) {
      res.push(arr[j]);
      res.push(arr[arr.length - j - 1]);
    }
    res.length = arr.length;
    return res;
  },
};
