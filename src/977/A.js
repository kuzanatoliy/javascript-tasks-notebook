module.exports = {
  getNumber: (number, count) => {
    let num = number.toString();
    while (count > 0 && num > 0) {
      const temp = num[num.length - 1] - count;
      num = num.slice(0, num.length - 1);
      if (temp >= 0) {
        num += temp;
        break;
      }
      count = ~temp;
    }
    return Number(num);
  },
};
