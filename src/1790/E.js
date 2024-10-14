module.exports = {
  getPair: (num) => {
    let b = num / 2;
    let a = b * 3;
    const d = Math.floor(a);
    if (a === d) {
      return (a ^ b) === num ? [a, b] : [-1];
    }
    a = d;
    b = Math.ceil(b);
    if ((a ^ b) === num) {
      return [a, b];
    }
    a++;
    b--;
    return (a ^ b) === num ? [a, b] : [-1];
  },
};
