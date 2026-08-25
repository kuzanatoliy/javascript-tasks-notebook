module.exports = {
  getMinorReduction: (snum) => {
    const temp = snum.split('').map((item) => +item);
    for (let j = temp.length - 1; j > 0; j--) {
      const d = temp[j - 1] + temp[j];
      if (d >= 10) {
        temp[j - 1] = Math.floor(d / 10);
        temp[j] = d % 10;
        return temp.join('');
      }
    }
    return (temp.shift() + temp.shift()).toString() + temp.join('');
  },
};
