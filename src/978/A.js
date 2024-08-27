module.exports = {
  getUniqueElems: (array) => Array.from(new Set(array.reverse())).reverse(),
};
