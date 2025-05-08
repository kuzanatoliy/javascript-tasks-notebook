module.exports = {
  isItPossibleToTransform: (s, t) => {
    let i = 0;
    let j = 0;
    while (i < s.length || j < t.length) {
      while (s[i] === 'b') {
        i++;
      }
      while (t[j] === 'b') {
        j++;
      }
      if ((i === s.length || j === t.length) && i !== j) {
        return 'NO';
      }
      if (s[i] !== t[j]) {
        return 'NO';
      }
      if (s[i] === 'a' && i > j) {
        return 'NO';
      }
      if (s[i] === 'c' && i < j) {
        return 'NO';
      }
      i++;
      j++;
    }
    return 'YES';
  },
};
