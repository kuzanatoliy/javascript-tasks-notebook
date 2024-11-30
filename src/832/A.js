module.exports = {
  isWinner: (num, k) => (Math.floor(num / k) % 2 === 0 ? 'NO' : 'YES'),
};
