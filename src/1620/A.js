module.exports = {
  isArrayExisted: (map) => {
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      count += +(map[j] === 'N');
    }
    return count === 1 ? 'NO' : 'YES';
  },
};
