module.exports = {
  getDelay: (num, hh, mm) => {
    if (hh === 7 || hh === 17 || mm % 10 === 7) {
      return 0;
    }
    if (hh > 17) {
      mm += (hh - 18) * 60;
    } else if (hh > 7) {
      mm += (hh - 8) * 60;
    } else {
      mm += (hh + 6) * 60;
    }
    let count = 0;
    while (mm >= 0 && mm % 10 !== 7) {
      count++;
      mm -= num;
    }
    return count;
  },
};
