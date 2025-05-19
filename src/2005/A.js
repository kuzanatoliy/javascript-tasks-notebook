const letters = ['a', 'e', 'i', 'o', 'u'];

module.exports = {
  buildString: (num) => {
    let d = num % 5;
    const s = (num - d) / 5;
    let res = '';
    for (let j = 0; j < letters.length; j++) {
      res += letters[j].repeat(s + (d > 0 ? 1 : 0));
      d--;
    }
    return res;
  },
};
