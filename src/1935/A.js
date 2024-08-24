module.exports = {
  getExicographicallySmallestString: (str) => {
    const revStr = str.split('').reverse().join('');
    return str <= revStr ? str : revStr + str;
  },
};
