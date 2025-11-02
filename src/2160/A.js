module.exports = {
  getMinScore: (arr) => {
    const temp = Array.from(new Set(arr)).sort((a, b) => a - b);
    let j = 0;
    while (j < temp.length) {
      if (j !== temp[j]) {
        break;
      }
      j++;
    }
    return j;
  },
};
