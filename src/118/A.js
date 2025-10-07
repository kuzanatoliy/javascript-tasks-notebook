module.exports = {
  transformString: (str) => {
    const temp = str.toLowerCase().split('');
    const res = [];
    for (let j = 0; j < temp.length; j++) {
      if (
        temp[j] === 'a' ||
        temp[j] === 'o' ||
        temp[j] === 'y' ||
        temp[j] === 'e' ||
        temp[j] === 'u' ||
        temp[j] === 'i'
      ) {
        continue;
      }
      res.push('.');
      res.push(temp[j]);
    }
    return res.join('');
  },
};
