module.exports = {
  isItPossibleToSplit: (snum) => {
    const arr = snum.split('').map((item) => +item);

    let carry = 0;

    for (let i = arr.length - 1; i > 1; i--) {
      if (arr[i] - carry === 9 || arr[i] - carry < 0) {
        return 'NO';
      }
      carry = 1;
    }

    const num = +`${arr[0]}${arr[1]}`;
    if (num - carry > 18 || num - carry < 10) {
      return 'NO';
    }

    return 'YES';
  },
};
