module.exports = {
  getDivirsedNumber: (number) => {
    const d = number % 7;
    if (d === 0) {
      return number;
    }
    const temp = number.toString();
    if (temp[temp.length - 1] >= d) {
      return number - d;
    }
    return number + 7 - d;
  },
};
