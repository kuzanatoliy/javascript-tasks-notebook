module.exports = {
  isNotPerfectSquare: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      const d = Math.floor(Math.sqrt(arr[j]));
      if (d * d !== arr[j]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
