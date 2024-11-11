module.exports = {
  getBracketSequences: (num) => {
    const res = [];
    let l = '';
    let r = '';
    const arr = Array(num).fill('()');
    for (let j = 0; j < num; j++) {
      l += '(';
      r += ')';
      arr.length -= 1;
      res.push(`${l}${r}${arr.join('')}`);
    }
    return res;
  },
};
