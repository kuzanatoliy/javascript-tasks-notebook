module.exports = {
  getCountOfUnreadedChapters: (array, k) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      count += array[j][1] >= k;
    }
    return count;
  },
};
