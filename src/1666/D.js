module.exports = {
  isItPossibleToTransform: (str, res) => {
    const s = str.split('');
    const t = res.split('').reverse().join('');
    let min = s.length + 1;
    for (const char of t) {
      const index = s.lastIndexOf(char);
      if (index === -1 || index > min) {
        return 'NO';
      }
      min = index;
      s[min] = '0';
    }
    return 'YES';
  },
};
