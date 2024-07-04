module.exports = {
  getMinCountOfRemovedNumbers: (array) => {
    let oddCount = 0;
    let evenCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 0) {
        evenCount++;
        continue;
      }
      oddCount++;
    }
    return Math.min(oddCount, evenCount);
  },
};
