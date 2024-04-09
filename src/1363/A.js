module.exports = {
  isItPossibleToGetOddSum: (length, array) => {
    let oddCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 1) {
        oddCount++;
      }
    }
    const evenCount = array.length - oddCount;
    let min = Math.min(oddCount, length);
    if (min % 2 === 0) {
      min--;
    }
    return evenCount >= length - min && oddCount > 0 ? 'YES' : 'NO';
  },
};
