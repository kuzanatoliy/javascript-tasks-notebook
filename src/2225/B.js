module.exports = {
  isItPossibleToTransform: (str) => {
    const pairs = [];
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] === str[j]) {
        pairs.push(j);
      }
    }
    return pairs.length < 3 ? 'YES' : 'NO';
  },
};
