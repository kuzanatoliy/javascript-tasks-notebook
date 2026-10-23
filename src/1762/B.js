module.exports = {
  getTransformationList: (arr) => {
    const res = [];
    for (let j = 0; j < arr.length; j++) {
      res.push([j + 1, 2 ** Math.ceil(Math.log2(arr[j])) - arr[j]]);
    }
    return res;
  },
};
