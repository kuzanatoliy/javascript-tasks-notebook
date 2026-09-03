module.exports = {
  nth: (arr, num = 0) => (num < 0 ? arr[arr.length + num] : arr[num]),
};
