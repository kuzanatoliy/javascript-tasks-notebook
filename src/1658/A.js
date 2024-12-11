module.exports = {
  getCountOfAdditionalPeople: (row) => {
    let count = 0;
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '0' && row[j + 1] === '0') {
        count += 2;
      }
      if (row[j] === '0' && row[j + 1] === '1' && row[j + 2] === '0') {
        count++;
        j++;
      }
    }
    return count;
  },
};
