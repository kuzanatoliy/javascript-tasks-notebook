module.exports = {
  getMinNumberOfDays: (array) => {
    let rest = 0;
    let gym = false;
    let contest = false;
    for (let j = 0; j < array.length; j++) {
      switch (array[j]) {
        case 0:
          rest++;
          gym = false;
          contest = false;
          break;
        case 1:
          if (contest) {
            rest++;
            contest = false;
          } else {
            gym = false;
            contest = true;
          }
          break;
        case 2:
          if (gym) {
            rest++;
            gym = false;
          } else {
            gym = true;
            contest = false;
          }
          break;
        case 3:
          if (gym) {
            gym = false;
            contest = true;
          } else if (contest) {
            gym = true;
            contest = false;
          }
          break;
      }
    }
    return rest;
  },
};
