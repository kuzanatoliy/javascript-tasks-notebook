module.exports = {
  isPalindrome: (str) => str === str.split('').reverse().join(''),
  isPolindromeTextV1: (text) => {
    const temp = text
      .toLowerCase()
      .split('')
      .filter((item) => item >= 'a' && item <= 'z');
    return temp.join('') === temp.reverse('').join('');
  },
};
