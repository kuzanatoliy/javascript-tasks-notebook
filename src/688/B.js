module.exports = {
  getLovelyPalindrome: (num) =>
    num.toString() + num.toString().split('').reverse().join(''),
};
