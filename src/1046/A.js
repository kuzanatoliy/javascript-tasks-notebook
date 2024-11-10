module.exports = {
  getGoodStringLength: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === 'a') {
        count++;
      }
    }
    return count > str.length - count ? str.length : count * 2 - 1;
  },
};
