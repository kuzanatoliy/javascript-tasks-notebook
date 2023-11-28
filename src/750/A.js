module.exports = {
  getCountOfSolvedProblems: (problems, wayTime) => {
    let i = 0;
    let time = 240 - wayTime;
    while (i < problems) {
      time -= (i + 1) * 5;
      if (time < 0) {
        break;
      }
      i++;
    }
    return i;
  },
};
