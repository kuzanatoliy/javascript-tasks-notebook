module.exports = {
  getCountOfNotes: (arr) => {
    let j = 0;
    let jj = 1;
    while (j < arr.length) {
      while (jj < arr.length && arr[j] === arr[jj]) {
        arr[jj]++;
        jj++;
      }
      j = jj - j === 1 ? jj : jj - 1;
      jj = j + 1;
    }
    return new Set(arr).size;
  },
};
