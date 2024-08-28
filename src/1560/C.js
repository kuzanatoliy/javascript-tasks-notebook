module.exports = {
  getPosition: (number) => {
    let j = 1;
    while (j < number) {
      number -= j;
      j += 2;
    }
    const d = Math.ceil(j / 2);
    return number <= d ? [number, d] : [d, d - (number - d)];
  },
};
