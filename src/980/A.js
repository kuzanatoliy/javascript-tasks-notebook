module.exports = {
  isItPossibleToLink: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count += str[j] === '-';
    }
    return count % (str.length - count) ? 'NO' : 'YES';
  },
};
