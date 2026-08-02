module.exports = {
  isPalindrome: (str) => str === str.split('').reverse().join(''),
  isPolindromeTextV1: (text) => {
    const temp = text
      .toLowerCase()
      .split('')
      .filter((item) => item >= 'a' && item <= 'z');
    return temp.join('') === temp.reverse('').join('');
  },
  isPolindromeTextV2: (text) => {
    const ltext = text.toLowerCase();
    let l = 0;
    let r = text.length - 1;
    let count = 0;
    while (l <= r) {
      while (l <= r && (ltext[l] < 'a' || ltext[l] > 'z')) {
        l++;
      }
      while (l <= r && (ltext[r] < 'a' || ltext[r] > 'z')) {
        r--;
      }
      if (ltext[l] !== ltext[r]) {
        return false;
      }
      count++;
      l++;
      r--;
    }
    return !!count;
  },
};
