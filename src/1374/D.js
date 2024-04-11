module.exports = {
  getMinNumbersOfMoves: (count, array) => {
    const map = new Map();
    let max = [0, 0];
    for (let j = 0; j < array.length; j++) {
      const key = count - (array[j] % count);
      if (count !== key) {
        map.set(key, (map.get(key) || 0) + 1);
      }
    }
    if (map.size === 0) {
      return 0;
    }
    for (const item of map.entries()) {
      if (item[1] > max[1]) {
        max = item;
      }
      if (item[1] === max[1] && item[0] > max[0]) {
        max = item;
      }
    }
    return count * (max[1] - 1) + max[0] + 1;
  },
};
