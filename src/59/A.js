const MIN = 'a'.charCodeAt(0);
const MAX = 'z'.charCodeAt(0);

module.exports = {
  getLowerCaseOrUpperCase: (word) => {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < word.length; i++) {
      var code = word.charCodeAt(i);
      if (MIN <= code && code <= MAX) {
        count1++;
      } else {
        count2++;
      }
    }
    return count1 >= count2 ? word.toLowerCase() : word.toUpperCase();
  },
};
