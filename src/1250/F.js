module.exports = {
  getPerimeter: (num) => {
    let d = Math.floor(Math.sqrt(num));
    let ans = num / d;
    while (ans !== Math.floor(ans)) {
      d--;
      ans = num / d;
    }
    return (d + ans) * 2;
  },
};
