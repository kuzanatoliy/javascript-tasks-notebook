module.exports = {
  getHeights: (arr) => {
    const res = [arr[0]];
    let [sum] = arr;
    for (let j = 1; j < arr.length; j++) {
      sum += arr[j];
      res.push(Math.min(res[j - 1], Math.floor(sum / (j + 1))));
    }
    return res;
  },
};
