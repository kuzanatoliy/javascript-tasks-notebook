module.exports = {
  getLimit: (request) => {
    const words = request.split(' ');
    if (words[2] === 'week') {
      if (words[0] === '5' || words[0] === '6') {
        return 53;
      }
      return 52;
    }
    if (words[0] === '30') {
      return 11;
    }
    if (words[0] === '31') {
      return 7;
    }
    return 12;
  },
};
