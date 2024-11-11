module.exports = {
  isItPerfectMelody: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      const d = Math.abs(arr[j] - arr[j - 1]);
      if (d !== 5 && d !== 7) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
