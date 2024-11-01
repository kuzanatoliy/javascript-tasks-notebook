module.exports = {
  getOperationsMap: (str) => {
    let sum = +str[0];
    let map = '';
    for (let j = 1; j < str.length; j++) {
      if (str[j] === '0') {
        map += '+';
        continue;
      }
      if (sum === 1) {
        map += '-';
        sum = 0;
      } else {
        map += '+';
        sum = 1;
      }
    }
    return map;
  },
};
