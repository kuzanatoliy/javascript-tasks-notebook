module.exports = {
  itIsPossibleToProve: (num) => {
    if (3 ** (num - 1) > 1000000000) {
      return ['NO'];
    }
    const arr = new Array(num).fill(1);
    for (let j = 1; j < arr.length; j++) {
      arr[j] = 3 * arr[j - 1];
    }
    return ['YES', arr];
  },
};
