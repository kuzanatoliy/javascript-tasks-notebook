module.exports = {
  isConfigurationOfRealNumbers: (nodes, pathes) => {
    const arr = [];
    for (let i = 0; i < nodes + 1; i++) {
      arr[i] = 0;
    }
    for (let i = 0; i < pathes.length; i++) {
      arr[pathes[i][0] - 1]++;
      arr[pathes[i][1] - 1]++;
    }
    return arr.find((item) => item === 2) ? 'NO' : 'YES';
  },
};
