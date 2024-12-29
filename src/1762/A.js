module.exports = {
  getCountOfOperations: (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    if (sum % 2 === 0) {
      return 0;
    }
    const arr = array.sort((a, b) => a - b);
    const map = {};
    let min = 999999999;
    for (let j = 0; j < arr.length; j++) {
      let steps = 1;
      const d = arr[j] % 2;
      let ans = Math.floor(arr[j] / 2);
      let dt = ans % 2;
      while (dt === d) {
        ans = Math.floor(ans / 2);
        dt = ans % 2;
        if (map[ans]) {
          steps += map[ans];
          break;
        }
        steps++;
      }
      map[arr[j]] = steps;
      if (min > steps) {
        min = steps;
      }
    }
    return min;
  },
};
