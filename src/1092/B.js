module.exports = {
  getCountOfImproves: (array) => {
    const arr = array.sort((a, b) => a - b);
    let sum = 0;
    for (let j = 0; j < arr.length; j += 2) {
      sum += arr[j + 1] - arr[j];
    }
    return sum;
  },
};
