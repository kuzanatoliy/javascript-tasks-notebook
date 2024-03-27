/* eslint-disable prefer-destructuring */
module.exports = {
  getMinNumbersOfTheDays: (exams) => {
    exams.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
    let day = 0;
    for (let j = 0; j < exams.length; j++) {
      if (day > exams[j][1]) {
        day = exams[j][0];
        continue;
      }
      day = exams[j][1];
    }
    return day;
  },
};
