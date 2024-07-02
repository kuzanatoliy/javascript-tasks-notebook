module.exports = {
  getCountOfCoins: (array) => {
    const arr = array.sort((a, b) => a - b);
    let [ans] = arr;
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (ans >= arr[j]) {
        ans++;
        count += ans - arr[j];
        continue;
      }
      ans = arr[j];
    }
    return count;
  },
};
