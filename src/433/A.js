module.exports = {
  isItPossibleToSplit: (arr) => {
    let a1 = 0;
    let a2 = 0;
    for (let j = 0; j < arr.length; j++) {
      a1 += arr[j] === 100;
      a2 += arr[j] === 200;
    }
    if (a2 % 2) {
      a1 -= 2;
    }
    return a1 < 0 || a1 % 2 ? 'NO' : 'YES';
  },
};
