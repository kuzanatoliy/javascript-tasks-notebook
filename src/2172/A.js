module.exports = {
  getResult: (arr) => {
    arr.sort((a, b) => a - b);
    return arr[2] - arr[0] >= 10 ? 'check again' : `final ${arr[1]}`;
  },
};
