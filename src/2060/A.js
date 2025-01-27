module.exports = {
  getMaxFibonaciness: (a1, a2, a4, a5) => {
    let a3 = a1 + a2;
    const c1 = 1 + Number(a2 + a3 === a4) + Number(a3 + a4 === a5);
    a3 = a4 - a2;
    const c2 = 1 + Number(a1 + a2 === a3) + Number(a3 + a4 === a5);
    a3 = a5 - a4;
    const c3 = 1 + Number(a1 + a2 === a3) + Number(a2 + a3 === a4);
    return Math.max(c1, c2, c3);
  },
};
