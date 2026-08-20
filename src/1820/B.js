module.exports = {
  getMaxRectangle: (str) => {
    const temp = (str + str).split('0');
    if (temp.length === 1) {
      return str.length * str.length;
    }
    let d = -Infinity;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].length > d) {
        d = temp[j].length;
      }
    }
    d /= 2;
    return (Math.floor(d) + 1) * Math.ceil(d);
  },
};
