module.exports = {
  getCountOfTurnedOverCards: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count +=
        str[j] === 'a' ||
        str[j] === 'e' ||
        str[j] === 'i' ||
        str[j] === 'o' ||
        str[j] === 'u' ||
        str[j] === '1' ||
        str[j] === '3' ||
        str[j] === '5' ||
        str[j] === '7' ||
        str[j] === '9';
    }
    return count;
  },
};
