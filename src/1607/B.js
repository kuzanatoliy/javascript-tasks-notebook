module.exports = {
  getPosition: (x0, num) => {
    let d = 0;
    switch (num % 4) {
      case 1:
        d = -num;
        break;
      case 2:
        d = 1;
        break;
      case 3:
        d = num + 1;
        break;
    }
    return x0 % 2 === 0 ? x0 + d : x0 - d;
  },
};
