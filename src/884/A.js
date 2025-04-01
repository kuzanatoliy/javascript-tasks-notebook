module.exports = {
  getCountOfDays: (array, k) => {
    let count = 0;
    while (count < array.length && k > 0) {
      k -= 86400 - array[count];
      count++;
    }
    return count;
  },
};
