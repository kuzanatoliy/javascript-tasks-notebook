module.exports = {
  getCountOfMoves: (number) => {
    const arr = number
      .toString()
      .split('')
      .map((item) => +item);
    if (arr[arr.length - 1] % 2 === 0) {
      return 0;
    }
    if (arr[0] % 2 === 0) {
      return 1;
    }
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] % 2 === 0) {
        return 2;
      }
    }
    return -1;
  },
};
