module.exports = {
  getOperations: (num) => new Array(num).fill(1).map((item, ind) => item + ind),
};
