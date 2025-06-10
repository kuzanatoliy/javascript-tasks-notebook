module.exports = {
  transformArray: (arr) => {
    const res = new Array(arr.length);
    let curr = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      curr = Math.max(curr, arr[j]);
      res[j] = curr > 0 ? 1 : 0;
      curr--;
    }
    return res;
  },
};
