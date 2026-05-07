module.exports = {
  getCounts: (map) => {
    const max = map.split('');
    let x = 0;
    let y = 0;
    for (let i = 1; i < map.length - 1; i++) {
      if (max[i - 1] === '1' && max[i + 1] === '1') {
        max[i] = '1';
      }
    }
    const min = max.slice();
    for (let i = 1; i < map.length - 1; i++) {
      if (min[i - 1] === '1' && min[i + 1] === '1') {
        min[i] = '0';
      }
    }
    for (let i = 0; i < map.length; i++) {
      if (min[i] === '1') {
        x++;
      }
      if (max[i] === '1') {
        y++;
      }
    }
    return [x, y];
  },
};
