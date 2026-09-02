module.exports = {
  isOrderExisted: (letters, abs) => {
    const set = new Set();
    for (let j = 0; j < letters.length; j++) {
      set.add(letters[j][0].toUpperCase());
    }
    for (let jj = 0; jj < abs.length; jj++) {
      for (let jjj = 0; jjj < abs[jj].length; jjj++) {
        if (!set.has(abs[jj][jjj])) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
