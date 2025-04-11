module.exports = {
  getSlimes: (num) => {
    const map = num.toString(2);
    const res = [];
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '1') {
        res.push(map.length - j);
      }
    }
    return res;
  },
};
