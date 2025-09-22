module.exports = {
  getWinner: (arr) => {
    const map = ['F', 'M', 'S'];
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] > b[0]);
    if (
      temp[0][0] === 'paper' &&
      temp[1][0] === 'rock' &&
      temp[2][0] === 'rock'
    ) {
      return map[temp[0][1]];
    }
    if (
      temp[0][0] === 'paper' &&
      temp[1][0] === 'paper' &&
      temp[2][0] === 'scissors'
    ) {
      return map[temp[2][1]];
    }
    if (
      temp[0][0] === 'rock' &&
      temp[1][0] === 'scissors' &&
      temp[2][0] === 'scissors'
    ) {
      return map[temp[0][1]];
    }
    return '?';
  },
};
