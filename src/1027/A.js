module.exports = {
  isItPossibleToBuildPolindrome: (str) => {
    const num = str.length / 2;
    for (let j = 0; j < num; j++) {
      const d = Math.abs(
        str.charCodeAt(j) - str.charCodeAt(str.length - j - 1)
      );
      if (d !== 0 && d !== 2) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
