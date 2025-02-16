/* eslint-disable sort-keys */
module.exports = {
  getGems: (arr) => {
    const map = {
      purple: 'Power',
      green: 'Time',
      blue: 'Space',
      orange: 'Soul',
      red: 'Reality',
      yellow: 'Mind',
    };
    for (let j = 0; j < arr.length; j++) {
      delete map[arr[j]];
    }
    return Object.keys(map).map((key) => map[key]);
  },
};
