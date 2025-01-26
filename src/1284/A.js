module.exports = {
  getNames: (mapS, mapT, years) => {
    const res = [];
    for (let j = 0; j < years.length; j++) {
      const d1 = (years[j] - 1) % mapS.length;
      const d2 = (years[j] - 1) % mapT.length;
      res.push(mapS[d1] + mapT[d2]);
    }
    return res;
  },
};
