module.exports = {
  isItPossibleToReorder: (map) => {
    let c = 0;
    for (let j = 0; j < map.length; j++) {
      c += map[j] === '(';
    }
    return c === map.length - c ? 'YES' : 'NO';
  },
};
