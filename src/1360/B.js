module.exports = {
  getDif: (strengthes) => {
    const s = strengthes.sort((a, b) => a - b);
    let min = s.at(-1);
    let temp;
    for (let j = 0; j < s.length; j++) {
      temp = s[j + 1] - s[j];
      if (min > temp) {
        min = temp;
      }
    }
    return min;
  },
};
