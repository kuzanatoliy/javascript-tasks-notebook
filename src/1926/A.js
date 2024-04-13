module.exports = {
  getDominantLetter: (string) => {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'A') {
        count++;
      }
    }
    return count > 2 ? 'A' : 'B';
  },
};
