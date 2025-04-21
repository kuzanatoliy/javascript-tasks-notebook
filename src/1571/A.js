module.exports = {
  getExpression: (map) => {
    const counts = { '<': 0, '=': 0, '>': 0 };
    for (let j = 0; j < map.length; j++) {
      counts[map[j]]++;
    }
    if (counts['='] === map.length) {
      return '=';
    } else if (counts['='] + counts['<'] === map.length) {
      return '<';
    } else if (counts['='] + counts['>'] === map.length) {
      return '>';
    } else {
      return '?';
    }
  },
};
