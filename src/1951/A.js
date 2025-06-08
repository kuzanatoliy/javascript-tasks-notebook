module.exports = {
  isItPossibleToReachConfiguration: (map) => {
    let c = 0;
    let fl = false;
    for (let j = 0; j < map.length; j++) {
      c += map[j] === '1';
      fl = fl || (map[j] === '1' && map[j - 1] === '1');
    }
    return (fl && c === 2) || c % 2 ? 'NO' : 'YES';
  },
};
