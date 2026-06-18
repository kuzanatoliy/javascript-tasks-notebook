module.exports = {
  getNeededCountStaff: (num, b, p) => {
    let sum = 0;
    let pom = num;

    while (pom > 1) {
      sum += Math.floor(pom / 2);
      pom = Math.floor(pom / 2) + (pom % 2);
    }

    return [sum * (2 * b + 1), num * p];
  },
};
