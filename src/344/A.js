module.exports = {
  checkMagnetsGroups: (magnets) => {
    let count = 1;
    for (let i = 1; i < magnets.length; i++) {
      if (magnets[i - 1][1] === magnets[i][0]) {
        count++;
      }
    }
    return count;
  },
};
