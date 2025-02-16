module.exports = {
  getMinCountOfCaracters: (str) => {
    let count = str[0] === '_' || str === '^' ? 1 : 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '_' && str[j + 1] !== '^') {
        count++;
      }
    }
    return count;
  },
};
