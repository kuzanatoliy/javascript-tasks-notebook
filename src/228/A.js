module.exports = {
  checkMinHorseshoes: (horses) => 4 - new Set(horses).size,
};
