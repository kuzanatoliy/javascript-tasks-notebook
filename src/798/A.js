module.exports = {
  isItPossibleToTransformToPolindrome: (str) => {
    const d = str.length / 2;
    let c = 0;
    for (let j = 0; j < d && c < 2; j++) {
      c += str[j] !== str[str.length - 1 - j];
    }
    return c === 1 || (c === 0 && str.length % 2) ? 'YES' : 'NO';
  },
};
