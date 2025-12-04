module.exports = {
  difference: (arr, vals) => {
    const temp = new Set(vals);
    const res = [];
    for (let j = 0; j < arr.length; j++) {
      if (!temp.has(arr[j])) {
        res.push(arr[j]);
      }
    }
    return res;
  },
};
