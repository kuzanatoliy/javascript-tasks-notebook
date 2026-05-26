module.exports = {
  getCountOfSteps: (a, b, cases) => {
    const res = [];
    for (let j = 0; j < cases.length; j++) {
      const t = Math.abs(cases[j][0] - cases[j][2]);
      if (t) {
        const max = Math.max(a, b);
        const min = Math.min(a, b);
        const p =
          cases[j][1] > max ? max : cases[j][1] < min ? min : cases[j][1];
        res.push(Math.abs(cases[j][1] - p) + Math.abs(cases[j][3] - p) + t);
      } else {
        res.push(Math.abs(cases[j][1] - cases[j][3]));
      }
    }
    return res;
  },
};
