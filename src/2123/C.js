module.exports = {
  getMap: (arr) => {
    let res = '1';
    const maxes = [...arr];
    const mins = [...arr];
    for (let j = 1; j < arr.length; j++) {
      mins[j] = Math.min(mins[j - 1], arr[j]);
    }
    for (let jj = arr.length - 2; jj > 0; jj--) {
      maxes[jj] = Math.max(maxes[jj + 1], arr[jj]);
    }
    for (let jjj = 1; jjj < arr.length - 1; jjj++) {
      res += arr[jjj] > mins[jjj - 1] && arr[jjj] < maxes[jjj + 1] ? '0' : '1';
    }
    return `${res}1`;
  },
};
