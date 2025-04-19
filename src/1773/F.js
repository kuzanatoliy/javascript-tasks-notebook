module.exports = {
  getScores: (num, a, b) => {
    if (num === 1) {
      return [a === b ? 1 : 0, `${a}:${b}`];
    }
    const arr = [0];
    while (num > (b === 0 ? 1 : 2) && a) {
      arr.push('1:0');
      num--;
      a--;
    }
    if (a) {
      arr.push(`${a}:0`);
      num--;
    }
    while (num > 1 && b) {
      arr.push('0:1');
      num--;
      b--;
    }
    if (b) {
      arr.push(`0:${b}`);
      num--;
    }
    arr[0] = num;
    while (num) {
      arr.push('0:0');
      num--;
    }
    return arr;
  },
};
