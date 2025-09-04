module.exports = {
  getCountOfEmeralds: (arr) => {
    let sum = 0;
    arr.sort((a, b) => b - a);
    for (let j = 0; j < arr.length; j += 2) {
      sum += arr[j];
    }
    return sum;
  },
};
