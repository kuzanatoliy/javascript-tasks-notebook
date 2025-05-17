module.exports = {
  getOriginalArr: (arr) => {
    const res = [arr[0]];
    let [max] = arr;
    for (let j = 1; j < arr.length; j++) {
      res.push(arr[j] + max);
      if (res[j] > max) {
        max = res[j];
      }
    }
    return res;
  },
};
