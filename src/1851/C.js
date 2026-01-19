module.exports = {
  isItPossibleToBuildPass: (arr, k) => {
    let j = 0;
    let cl = 0;
    while (j < arr.length && cl < k) {
      cl += arr[j] === arr[0];
      j++;
    }
    let cr = 0;
    while (j < arr.length && cr < k) {
      cr += arr[j] === arr[arr.length - 1];
      j++;
    }
    return cl === k && (cr === k || arr[0] === arr[arr.length - 1])
      ? 'YES'
      : 'NO';
  },
};
