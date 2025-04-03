module.exports = {
  getCountOfTeams: (arr) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        c1++;
      } else {
        c2++;
      }
    }
    const count = Math.min(c1, c2);
    const d = c1 - c2;
    return count + (d > 0 ? Math.floor(d / 3) : 0);
  },
};
