module.exports = {
  getPoints: (arr) => {
    arr.sort((a, b) => b - a);
    const [x] = arr;
    return [
      x,
      arr.filter(
        (item, index, array) =>
          x % item !== 0 || (index > 0 && array[index - 1] === item)
      )[0],
    ];
  },
};
