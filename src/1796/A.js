const MAP = 'FBFFBFFBFBFFBFFBFBFFBFFBFB';

module.exports = {
  isSubstr: (str) => (MAP.indexOf(str) === -1 ? 'NO' : 'YES'),
};
