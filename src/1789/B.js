module.exports = {
  isItPossibleToTransform: (str) => {
    let count = 0;
    const d = str.length / 2;
    let prev = 0;
    for (let j = 0; j < d; j++) {
      if (str[j] !== str[str.length - j - 1] && !prev) {
        count++;
        prev = 1;
        continue;
      }
      if (str[j] === str[str.length - j - 1]) {
        prev = 0;
      }
    }
    return count > 1 ? 'NO' : 'YES';
  },
};
