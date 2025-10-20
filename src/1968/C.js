module.exports = {
  transformArray: (arr) => {
    const res = [501];
    for (let j = 0; j < arr.length; j++) {
      res.push(res[j] + arr[j]);
    }
    return res;
  },
};
