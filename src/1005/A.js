module.exports = {
  getStairways: (arr) => {
    let count = 1;
    const res = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] === 1) {
        res.push(count);
        count = 0;
      }
      count++;
    }
    res.push(count);
    return res;
  },
};
