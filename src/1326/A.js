module.exports = {
  buildNumber: (num) => {
    if (num === 1) {
      return -1;
    }
    let res = '2';
    for (let j = 1; j < num; j++) {
      res += '3';
    }
    return res;
  },
};
