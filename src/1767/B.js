module.exports = {
  getMaxValue: (array) => {
    let [val] = array;
    const arr = array.slice(1).sort((a, b) => a - b);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > val) {
        val = Math.ceil((val + arr[j]) / 2);
      }
    }
    return val;
  },
};
