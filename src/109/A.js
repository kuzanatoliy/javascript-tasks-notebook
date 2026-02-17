module.exports = {
  getLukyNumber: (num) => {
    let four = Math.floor(num / 4);
    const d = num % 4;
    let seven = 0;
    if (four >= 1 && d === 3) {
      seven = 1;
      four--;
    } else if (four >= 3 && d === 2) {
      seven = 2;
      four -= 3;
    } else if (four >= 5 && d === 1) {
      seven = 3;
      four -= 5;
    } else if (d !== 0) {
      return -1;
    }
    seven += Math.floor(four / 7) * 4;
    four %= 7;
    return `${new Array(four).fill(4).join('')}${new Array(seven).fill(7).join('')}`;
  },
};
