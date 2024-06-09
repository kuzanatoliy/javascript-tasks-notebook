module.exports = {
  getCountOfOperations: (nails) => {
    let count = 0;
    for (let j = 0; j < nails.length; j++) {
      if (nails[j][1] - nails[j][0] < 0) {
        count++;
      }
    }
    return count;
  },
};
