module.exports = {
  getFinalString: (str) => {
    const map = {};
    for (let j = 0; j < str.length; j++) {
      map[str[j]] = (map[str[j]] || 0) + 1;
    }
    for (let jj = 0; jj < str.length; jj++) {
      if (map[str[jj]] === 1) {
        return str.slice(jj);
      }
      map[str[jj]]--;
    }
    return '';
  },
};
