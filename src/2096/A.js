module.exports = {
  getOrder: (map) => {
    const res = [];
    let min = 1;
    let max = map.length + 1;
    for (let j = map.length - 1; j >= 0; j--) {
      if (map[j] === '>') {
        res.push(max);
        max--;
      } else {
        res.push(min);
        min++;
      }
    }
    res.push(map[map.length - 1] === '>' ? min : max);
    return res.reverse();
  },
};
