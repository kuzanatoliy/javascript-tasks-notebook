module.exports = {
  isItPosibleToConstructArray: (num) => {
    if (num === 1) {
      return ['YES', [1]];
    }
    if (num === 3) {
      return ['NO'];
    }
    const res = [];
    if (num % 2 === 0) {
      const d = num / 2;
      for (let j = 0; j < d; j++) {
        res.push(-1);
        res.push(1);
      }
    } else {
      const d = Math.floor(num / 2);
      res.push(d - 1);
      for (let j = 0; j < d; j++) {
        res.push(-d);
        res.push(d - 1);
      }
    }
    return ['YES', res];
  },
};
