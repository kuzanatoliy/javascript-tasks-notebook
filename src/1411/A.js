module.exports = {
  isBadMessage: (str) => {
    let count = 0;
    while (count < str.length && str[str.length - 1 - count] === ')') {
      count++;
    }
    return count > str.length - count ? 'YES' : 'NO';
  },
};
