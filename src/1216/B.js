module.exports = {
  getOrder: (array) => {
    const arr = array
      .map((item, ind) => [item, ind])
      .sort((a, b) => b[0] - a[0]);
    let sum = 0;
    for (let j = 1; j < arr.length; j++) {
      sum += arr[j][0] * j;
    }
    return [sum + arr.length, arr.map((item) => item[1] + 1)];
  },
};
