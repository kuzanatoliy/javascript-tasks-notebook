module.exports = {
  getCountOfHappyPeople: (arr, r) => {
    r *= 2;
    let res = 0;
    let store = 0;
    for (let j = 0; j < arr.length; j++) {
      const d = arr[j] % 2;
      arr[j] -= d;
      res += arr[j];
      r -= arr[j];
      store += d;
    }
    return res + Math.min(store, r - store);
  },
};
