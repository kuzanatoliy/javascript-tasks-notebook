module.exports = {
  getMaxAmount: (array) => {
    const arr = array.sort((a, b) => b - a);
    let [max] = arr;
    for (let j = 1; j < arr.length; j++) {
      const d = arr[j] * (j + 1);
      if (d > max) {
        max = d;
      }
    }
    return max;
  },
};
