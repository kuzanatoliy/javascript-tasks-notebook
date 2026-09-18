module.exports = {
  isItPossibleToReorder: (s, arr) => {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      c0 += arr[j] === 0;
      c1 += arr[j] === 1;
      c2 += arr[j] === 2;
    }
    if (s < sum) {
      return arr;
    }
    if (s - sum === 1) {
      return [
        ...new Array(c0).fill(0),
        ...new Array(c2).fill(2),
        ...new Array(c1).fill(1),
      ];
    }
    return [-1];
  },
};
