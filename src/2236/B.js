module.exports = {
  isItPossibleToTransform: (k, str) => {
    const arr = new Array(k).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[j % k] += str[j] === '1';
    }
    return arr.filter((item) => !(item % 2)).length === k ? 'YES' : 'NO';
  },
};
