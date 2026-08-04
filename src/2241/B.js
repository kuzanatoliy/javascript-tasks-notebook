module.exports = {
  getMinLengthAfterTransformation: (str) => {
    let c = 0;
    for (let j = 1; j < str.length; j++) {
      c += str[j] !== str[j - 1];
    }
    return c === 1 ? 2 : 1;
  },
};
