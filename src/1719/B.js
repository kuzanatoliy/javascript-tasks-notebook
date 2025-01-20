module.exports = {
  isItPossibleToSplit: (num, k) => {
    k %= 4;
    if (k === 0) {
      return ['NO'];
    }
    let pairs = [];
    for (let j = 1; j < num; j += 2) {
      pairs.push([j, j + 1]);
    }
    if (k === 2) {
      pairs = pairs.map((item) =>
        item[1] % 4 === 0 ? item : [item[1], item[0]]
      );
    }
    return ['YES', pairs];
  },
};
