module.exports = {
  getPairs: (array) => {
    const arr = array.sort((a, b) => a - b);
    const res = [];
    for (let j = 0; j < arr.length / 2; j++) {
      res.push([arr[j], arr[arr.length - j - 1]]);
    }
    return res;
  },
};
