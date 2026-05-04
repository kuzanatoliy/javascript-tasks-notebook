module.exports = {
  getCountOfStudents: (map) => {
    let j = 0;
    while (j < map.length && map[j] !== 'L') {
      j++;
    }
    return j + 1;
  },
};
