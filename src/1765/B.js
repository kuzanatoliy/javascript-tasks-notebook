module.exports = {
  canWordBePrinted: (word) => {
    if (word.length % 3 === 2) {
      return 'NO';
    }
    for (let j = 0; j < word.length; j += 3) {
      if (word[j + 1] !== word[j + 2]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
