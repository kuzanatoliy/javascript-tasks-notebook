module.exports = {
  getCountOfLinePairs: (arrP, arrQ) => {
    const p = arrP.reduce((res, val) => res + (val % 2), 0);
    const q = arrQ.reduce((res, val) => res + (val % 2), 0);
    return p * q + (arrP.length - p) * (arrQ.length - q);
  },
};
