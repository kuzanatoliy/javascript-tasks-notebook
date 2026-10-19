module.exports = {
  isItPossibleToOptimize: (num, d) => {
    const r = Math.sqrt(d);
    for (let j = 0; j < r; j++) {
      if (j + Math.ceil(d / (j + 1)) <= num) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
