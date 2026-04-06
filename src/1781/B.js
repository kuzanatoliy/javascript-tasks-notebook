module.exports = {
  getCountOfVisitors: (arr) => {
    arr.sort((a, b) => a - b);
    arr.push(-1);
    let count = arr[0] ? 1 : 0;
    for (let i = 0; i < arr.length; i++) {
      count += arr[i] <= i && (arr[i + 1] > i + 1 || arr[i + 1] === -1);
    }
    return count;
  },
};
