module.exports = {
  checkBeautifulYear: (year) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      year++;
      const temp = year.toString().split('').sort();
      let i;
      for (i = 1; i < temp.length && temp[i - 1] !== temp[i]; i++);
      if (i === temp.length) {
        break;
      }
    }
    return year;
  },
};
