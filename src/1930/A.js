module.exports = {
  getMaxScore: (array) => {
    const arr = array.sort((a, b) => a - b);
    let [sum] = arr;
    for (let j = 2; j < arr.length; j += 2) {
      sum += arr[j];
    }
    return sum;
  },
};
