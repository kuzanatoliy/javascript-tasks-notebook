module.exports = {
  getMaxCount: (arr) => {
    const ans = arr.reverse();
    let [sum] = ans;
    let [min] = ans;
    for (let j = 1; j < arr.length && min > 0; j++) {
      min = Math.min(arr[j], min - 1);
      sum += min;
    }
    return sum;
  },
};
