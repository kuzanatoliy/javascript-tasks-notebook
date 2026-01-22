module.exports = {
  getCost: (map) => {
    const temp = map.split('1');
    return Math.max(
      ...temp.map((item) => item.length),
      temp[0].length + temp[temp.length - 1].length
    );
  },
};
