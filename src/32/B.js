module.exports = {
  convertBorze: (string) => {
    let i = 0;
    const result = [];
    while (i < string.length) {
      if (string[i] === '-') {
        i++;
        result.push(string[i] === '-' ? 2 : 1);
      } else {
        result.push(0);
      }
      i++;
    }
    return result.join('');
  },
};
