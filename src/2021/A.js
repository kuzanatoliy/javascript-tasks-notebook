module.exports = {
  getResNum: (array) => {
    const arr = array.sort((a, b) => a - b);
    let [sum] = arr;
    for (let j = 1; j < arr.length; j++) {
      sum = Math.floor((arr[j] + sum) / 2);
    }
    return sum;
  },
};
