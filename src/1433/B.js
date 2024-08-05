module.exports = {
  getCountOfMoves: (array) => {
    let l = 0;
    let r = array.length - 1;
    while (array[l] === 0) {
      l++;
    }
    while (array[r] === 0) {
      r--;
    }
    let count = 0;
    for (let j = l + 1; j < r; j++) {
      if (array[j] === 0) {
        count++;
      }
    }
    return count;
  },
};
