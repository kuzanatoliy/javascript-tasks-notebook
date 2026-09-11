module.exports = {
  restoreArray: (arr) => {
    const res = [arr[0]];
    for (let j = 1; j < arr.length; j++) {
      res.push(Math.min(arr[j - 1], arr[j]));
    }
    res.push(arr[arr.length - 1]);
    return res;
  },
};
