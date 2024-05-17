module.exports = {
  getCountOfTeams: (array, power) => {
    const arr = array.sort((a, b) => a - b);
    let cnt = 0;
    let p = arr.length - 1;
    let prev = arr.length;
    while (p >= 0) {
      if ((prev - p) * arr[p] >= power) {
        prev = p;
        cnt += 1;
      }
      p--;
    }
    return cnt;
  },
};
