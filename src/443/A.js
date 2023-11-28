module.exports = {
  checkUniqueLetters: (letters) => {
    switch (letters.length) {
      case 2:
        return 0;
      case 3:
        return 1;
      default:
        return new Set(letters.split('')).size - 4;
    }
  },
};
