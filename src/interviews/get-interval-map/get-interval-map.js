module.exports = {
  getIntervalMap: (arr) => {
    if (!arr.length) {
      return '';
    }
    let curr = [arr[0]];
    const res = [];
    let j = 1;
    while (j < arr.length) {
      const d = arr[j] - arr[j - 1];
      if (d > 1) {
        res.push(curr);
        curr = [arr[j]];
      } else if (d === 1) {
        curr[1] = arr[j];
      }
      j++;
    }
    res.push(curr);
    return res.map((item) => item.join('-')).join(',');
  },
};
