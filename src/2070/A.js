module.exports = {
  getCountOfFizzBuzzNums: (num) =>
    Math.floor((num + 1) / 15) * 3 + Math.min((num + 1) % 15, 3),
};
