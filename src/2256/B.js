module.exports = {
  getVariantsCount: (str) => {
    const temp = new Array(4).fill(1);
    const map = '00110011';
    for (let j = 0; j < str.length; j++) {
      const d = j % 4;
      temp[0] = temp[0] && (str[j] === '?' || map[d] === str[j]);
      temp[1] = temp[1] && (str[j] === '?' || map[d + 1] === str[j]);
      temp[2] = temp[2] && (str[j] === '?' || map[d + 2] === str[j]);
      temp[3] = temp[3] && (str[j] === '?' || map[d + 3] === str[j]);
    }
    return temp.reduce((a, b) => a + b);
  },
};
