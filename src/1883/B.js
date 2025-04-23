module.exports = {
  isItPossibleToTransform: (str, k) => {
    const map = {};
    for (let j = 0; j < str.length; j++) {
      map[str[j]] = (map[str[j]] || 0) + 1;
    }
    return Object.keys(map).filter((item) => map[item] % 2 === 1).length > k + 1
      ? 'NO'
      : 'YES';
  },
};
