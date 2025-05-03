module.exports = {
  isItPossibleToSend: (f, a, b, arr) => {
    let sum = 0;
    let prev = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += Math.min((arr[j] - prev) * a, b);
      prev = arr[j];
    }
    return sum < f ? 'YES' : 'NO';
  },
};
