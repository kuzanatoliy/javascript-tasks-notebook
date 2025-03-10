module.exports = {
  getMaxCountOfHaybales: (arr, k) => {
    let [count] = arr;
    for (let j = 1; j < arr.length && k > 0; j++) {
      const d = Math.floor(k / j);
      count += Math.min(arr[j], d);
      k -= arr[j] * j;
    }
    return count;
  },
};
