module.exports = {
  getCountOfDays: (count) => {
    let j = 2;
    while (count % (2 ** j - 1) > 0) {
      j++;
    }
    return count / (2 ** j - 1);
  },
};
