/* eslint-disable complexity */
module.exports = {
  getDelay: (time) => {
    const t = time.split(':');
    const min = +t[0] * 60 + +t[1];
    if (min === 0) {
      return 0;
    } else if (min <= 70) {
      return 70 - min;
    } else if (min <= 140) {
      return 140 - min;
    } else if (min <= 210) {
      return 210 - min;
    } else if (min <= 280) {
      return 280 - min;
    } else if (min <= 350) {
      return 350 - min;
    } else if (min <= 601) {
      return 601 - min;
    } else if (min <= 671) {
      return 671 - min;
    } else if (min <= 741) {
      return 741 - min;
    } else if (min <= 811) {
      return 811 - min;
    } else if (min <= 881) {
      return 881 - min;
    } else if (min <= 951) {
      return 951 - min;
    } else if (min <= 1202) {
      return 1202 - min;
    } else if (min <= 1272) {
      return 1272 - min;
    } else if (min <= 1342) {
      return 1342 - min;
    } else if (min <= 1412) {
      return 1412 - min;
    } else {
      return 1440 - min;
    }
  },
};
