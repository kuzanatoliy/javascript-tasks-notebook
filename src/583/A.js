module.exports = {
  getDayNumbers: (days) => {
    const setV = new Set();
    const setH = new Set();
    const res = [];
    for (let j = 0; j < days.length; j++) {
      if (!setV.has(days[j][0]) && !setH.has(days[j][1])) {
        setV.add(days[j][0]);
        setH.add(days[j][1]);
        res.push(j + 1);
      }
    }
    return res;
  },
};
