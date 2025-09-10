/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfDays: (doctors) => {
    let curr = 0;
    for (let j = 0; j < doctors.length; j++) {
      if (curr >= doctors[j][0]) {
        curr =
          doctors[j][0] +
          Math.ceil((curr - doctors[j][0] + 1) / doctors[j][1]) * doctors[j][1];
        continue;
      }
      curr = doctors[j][0];
    }
    return curr;
  },
};
