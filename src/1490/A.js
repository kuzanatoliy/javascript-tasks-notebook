module.exports = {
  getCountOfAdds: (array) => {
    let count = 0;
    for (let j = 1; j < array.length; j++) {
      let min = array[j - 1];
      let max = array[j];
      if (array[j] < array[j - 1]) {
        max = array[j - 1];
        min = array[j];
      }
      while (max / min > 2) {
        count++;
        min *= 2;
      }
    }
    return count;
  },
};
