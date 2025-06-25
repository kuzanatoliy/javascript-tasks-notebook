module.exports = {
  isItPossibleToSit: (arr, limit) => {
    arr.sort((a, b) => a - b);
    let sum = arr.reduce((a, b) => a + b, 0);
    limit -= arr.length;
    sum += arr[arr.length - 1] - arr[0];
    return sum > limit ? 'NO' : 'YES';
  },
};
