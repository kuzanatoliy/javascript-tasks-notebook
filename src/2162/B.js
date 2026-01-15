module.exports = {
  getPositions: (str) => {
    const res = [];
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') {
        res.push(j + 1);
      }
    }
    return res;
  },
};
