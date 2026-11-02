module.exports = {
  getScore: (map) => {
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      count += map[j] === '1';
    }
    return count > 2 ? map.lastIndexOf('1') - map.indexOf('1') : count - 1;
  },
};
