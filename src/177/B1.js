module.exports = {
  getAmount: (num) => {
    let x = num;
    while (num > 1) {
      let best = 1;
      for (let j = 1; j < num; j++) {
        best = j > best && num % j === 0 ? j : best;
      }
      x += best;
      num = best;
    }
    return x;
  },
};
