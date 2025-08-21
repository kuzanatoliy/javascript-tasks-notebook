module.exports = {
  isItQuasiPalindromic: (str) => {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < str.length; j++) {
      counts[str[j]]++;
    }
    let fl = false;
    for (let jj = 0; jj < counts.length; jj++) {
      if (counts[jj] % 2) {
        if (fl) {
          return 'NO';
        }
        fl = true;
      }
    }
    return 'YES';
  },
};
