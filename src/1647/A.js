module.exports = {
  getPassword: (num) => {
    const l = Math.floor(num / 3);
    const d = num % 3;
    let pas = d === 1 ? '1' : '';
    for (let j = 0; j < l; j++) {
      pas += '21';
    }
    if (d === 2) {
      pas += '2';
    }
    return pas;
  },
};
