module.exports = {
  buildString: (num) => {
    const res = [];
    for (let j = 0; j < num; j += 4) {
      res.push('a');
      res.push('a');
      res.push('b');
      res.push('b');
    }
    res.length = num;
    return res.join('');
  },
};
