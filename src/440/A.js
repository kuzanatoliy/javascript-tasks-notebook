module.exports = {
  getGap: (array) => {
    const arr = array.sort((a, b) => a - b);
    let j = 0;
    while (j < arr.length) {
      j++;
      if (arr[j - 1] !== j) {
        return j;
      }
    }
    return j + 1;
  },
};
