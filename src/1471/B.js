module.exports = {
  getArrSum: (x, arr) => {
    let sum = 0;
    let fl = 0;
    for (let j = 0; j < arr.length; j++) {
      fl = fl || (arr[j].value || arr[j]) % x;
      if (!fl) {
        if (arr[j].count) {
          arr.push({
            count: x * arr[j].count,
            value: arr[j].value / x,
          });
        } else {
          arr.push({
            count: x,
            value: arr[j] / x,
          });
        }
      }
      if (arr[j].value) {
        sum += arr[j].value * arr[j].count;
      } else {
        sum += arr[j];
      }
    }
    return sum;
  },
};
