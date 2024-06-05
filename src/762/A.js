module.exports = {
  getDivisor: (number, k) => {
    if (number < k) {
      return -1;
    }
    const border = Math.sqrt(number);
    const temp = [];
    for (let j = 1; j <= border; j++) {
      const d = number % j;
      if (d === 0) {
        const res = number / j;
        if (j === res) {
          k--;
        } else {
          temp.push(res);
        }
        if (temp.length === k) {
          return j;
        }
      }
    }
    return k > 2 * temp.length ? -1 : temp[2 * temp.length - k];
  },
};
