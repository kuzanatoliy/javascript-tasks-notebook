module.exports = {
  isItPossibleToGetOddSum: (arr) => {
    const odd = [];
    const even = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        even.push(j);
      } else {
        odd.push(j);
      }
    }
    if (arr.length === even.length || (odd.length === 2 && arr.length === 3)) {
      return ['NO'];
    }
    return [
      'YES',
      even.length > 1
        ? [even[0] + 1, even[1] + 1, odd[0] + 1]
        : [odd[0] + 1, odd[1] + 1, odd[2] + 1],
    ];
  },
};
