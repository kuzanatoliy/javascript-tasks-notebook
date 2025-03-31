module.exports = {
  getCountOfTeams: (array, k) => {
    const arr = array.sort((a, b) => b - a);
    let tm = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      tm++;
      if (arr[j] * tm >= k) {
        tm = 0;
        count++;
      }
    }
    return count;
  },
};
