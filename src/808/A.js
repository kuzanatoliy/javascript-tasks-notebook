module.exports = {
  getNextLuckyYear: (currYear) => {
    const temp = currYear.toString();
    const next = new Array(temp.length).fill(0);
    if (temp[0] === 9) {
      return +`1${next.join('')}` - currYear;
    }
    next[0] = +temp[0] + 1;
    return +next.join('') - currYear;
  },
};
