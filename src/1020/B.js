module.exports = {
  getPositions: (arr) => {
    const res = [];
    for (let j = 0; j < arr.length; j++) {
      const temp = new Array(arr.length);
      let next = j;
      while (!temp[next]) {
        temp[next] = 1;
        next = arr[next] - 1;
      }
      res.push(next + 1);
    }
    return res;
  },
};
