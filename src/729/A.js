module.exports = {
  transformString: (str) => {
    const res = [];
    for (let j = 0; j < str.length; ) {
      if (str[j] === 'o' && str[j + 1] === 'g' && str[j + 2] === 'o') {
        j += 3;
        res.push('***');
        while (str[j] === 'g' && str[j + 1] === 'o') {
          j += 2;
        }
      } else {
        res.push(str[j]);
        j++;
      }
    }
    return res.join('');
  },
};
