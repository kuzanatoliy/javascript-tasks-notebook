module.exports = {
  cutArray: (arr) => {
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    return sum % 3 ? [0, 0] : [1, 2];
  },
};
