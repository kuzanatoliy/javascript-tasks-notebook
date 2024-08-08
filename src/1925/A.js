const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  getString: (data) => alphabet.slice(0, data[1]).repeat(data[0]),
};
