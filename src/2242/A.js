module.exports = {
  isItPossibleToBuildString: (arr) => {
    let c2 = 0;
    let c3 = 0;
    for (let j = 0; j < arr.length; j++) {
      c2 += arr[j] > 1;
      c3 += arr[j] > 2;
    }
    return c3 > 0 || c2 > 1 ? 'YES' : 'NO';
  },
};
