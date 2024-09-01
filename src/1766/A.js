module.exports = {
  getCountOfRoundedNumber: (number) => {
    const str = number.toString();
    return (str.length - 1) * 9 + +str[0];
  },
};
