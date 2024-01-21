module.exports = {
  getPerfectInteger: (number) => {
    let i = 1;
    while (number) {
      let t = 0;
      i += 9;
      let a = i;
      while (a) {
        const temp = a % 10;
        t += temp;
        a = (a - temp) / 10;
      }
      if (t === 10) {
        --number;
      }
    }
    return i;
  },
};
