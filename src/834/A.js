const cwDirections = ['^', '>', 'v', '<'];

module.exports = {
  getDirection: (start, end, num) => {
    if (num % 2 === 0) {
      return 'undefined';
    }

    const startIndex = cwDirections.indexOf(start);
    const endIndex = cwDirections.indexOf(end);

    return (startIndex + num) % 4 === endIndex ? 'cw' : 'ccw';
  },
};
