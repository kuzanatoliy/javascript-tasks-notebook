module.exports = {
  getOriginNumber: (arr) => {
    arr.sort((a, b) => b - a);
    const strs = arr.map((item) => item.toString(2).split('').reverse());
    const res = [];
    for (let j = 0; j < strs[0].length; j++) {
      let c = 0;
      for (let jj = 0; jj < strs.length; jj++) {
        if (strs[jj][j] === '1') {
          c++;
        }
      }
      res.push(c > strs.length - c ? '1' : '0');
    }
    return parseInt(res.reverse().join(''), 2);
  },
};
