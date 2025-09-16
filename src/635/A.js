module.exports = {
  isItPossibleToChooseBalls: (arr) => {
    const temp = Array.from(new Set(arr)).sort((a, b) => a - b);
    for (let j = 2; j < temp.length; j++) {
      if (temp[j] - temp[j - 2] === 2) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
