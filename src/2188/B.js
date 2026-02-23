module.exports = {
  getMinCountOfSeatedStudents: (s) => {
    const n = s.length;
    let seats = 0;
    const spaces = new Array(n).fill(true);
    for (let i = 0; i < n; i++) {
      if (s[i] === '1') {
        if (i - 1 >= 0) {
          spaces[i - 1] = false;
        }
        spaces[i] = false;
        seats++;
        if (i + 1 < n) {
          spaces[i + 1] = false;
        }
      }
    }
    const groups = spaces
      .map((x) => (x ? 0 : 1))
      .join('')
      .split('1')
      .filter((x) => x !== '');
    groups.forEach((g) => {
      seats += Math.ceil(g.length / 3);
    });
    return seats;
  },
};
