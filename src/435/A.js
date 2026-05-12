module.exports = {
  getCountOfBuses: (m, arr) => {
    let [curr] = arr;
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
      if (curr + arr[j] > m) {
        curr = arr[j];
        count++;
      } else {
        curr += arr[j];
      }
    }
    return count;
  },
};
