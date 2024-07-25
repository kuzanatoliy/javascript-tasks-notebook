module.exports = {
  getMinCountOfOperations: (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= array.length; i++) {
      const reqsum = sum / i;
      let cursum = 0;
      for (let j = 0; j < array.length; j++) {
        cursum += array[j];
        if (cursum === reqsum) {
          cursum = 0;
        }
      }
      if (cursum === 0) {
        ans = Math.min(ans, array.length - i);
      }
    }
    return ans;
  },
};
