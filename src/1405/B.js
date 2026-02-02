module.exports = {
  getCost: (arr) => {
    let store = 0;
    let cost = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] < 0) {
        store -= arr[j];
      } else if (store < arr[j]) {
        cost += arr[j] - store;
        store = 0;
      } else {
        store -= arr[j];
      }
    }
    return cost;
  },
};
