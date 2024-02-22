module.exports = {
  getNumber: (numbers) => {
    const map = {};
    for (let j = 0; j < numbers.length; j++) {
      map[numbers[j]] = (map[numbers[j]] || 0) + 1;
    }
    return +Object.keys(map).find((key) => map[key] > 2) || -1;
  },
};
