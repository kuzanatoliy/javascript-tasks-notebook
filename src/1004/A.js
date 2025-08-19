module.exports = {
  getCountOfHotels: (arr, k) => {
    let count = 2;
    for (let j = 1; j < arr.length; j++) {
      const d1 = arr[j - 1] + k;
      const d2 = arr[j] - k;
      if (d1 === d2) {
        count++;
      } else if (d2 > d1) {
        count += 2;
      }
    }
    return count;
  },
};
