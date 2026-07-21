module.exports = {
  isItPossibleToBuild: (arr) => {
    arr.sort((a, b) => a - b);
    if (arr[0] !== 1) {
      return 'NO';
    }
    let [sum] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > sum) {
        return 'NO';
      }
      sum += arr[j];
    }
    return 'YES';
  },
};
