module.exports = {
  getAnswer: (str) => {
    const last = str.slice(0, str.length - 1).trim();
    const l = last[last.length - 1].toLowerCase();
    return l === 'a' ||
      l === 'e' ||
      l === 'i' ||
      l === 'o' ||
      l === 'u' ||
      l === 'y'
      ? 'YES'
      : 'NO';
  },
};
