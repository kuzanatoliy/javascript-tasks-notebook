module.exports = {
  getMaxTime: (map) => {
    const temp = map.split('*');
    let max = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].length > max) {
        max = temp[j].length;
      }
    }
    return Math.ceil(max / 2);
  },
};
