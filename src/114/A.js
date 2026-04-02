module.exports = {
  isPetriciumusCifera: (k, l) => {
    let t = k;
    let i = 1;
    while (t < l) {
      t *= k;
      i++;
    }
    return t === l ? ['YES', i - 1] : ['NO'];
  },
};
