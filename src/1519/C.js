module.exports = {
  getCommonPowers: (u, s) => {
    const a = [];
    const power = new Array(u.length + 1).fill(0);
    u.forEach((el, i) => {
      if (!a[el]) {
        a[el] = [];
      }
      a[el].push(s[i]);
    });

    for (let i = 1; i <= u.length; i++) {
      if (a[i]) {
        a[i].sort((item1, item2) => item2 - item1);
        const len = a[i].length;
        for (let j = 1; j < len; j++) {
          a[i][j] += a[i][j - 1];
        }
        for (let j = 1; j <= len; j++) {
          const x = parseInt(len / j) * j;
          power[j] += a[i][x - 1];
        }
      }
    }

    return power.slice(1);
  },
};
