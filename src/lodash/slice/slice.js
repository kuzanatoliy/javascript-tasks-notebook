module.exports = {
  slice: (arr, start = 0, end = arr.length) => {
    const res = [];
    for (let j = start; j < end && j < arr.length; j++) {
      res.push(arr[j]);
    }
    return res;
  },
};
