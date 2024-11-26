module.exports = {
  getCounOfNumbers: (snum) => Math.max(...snum.split('').map((item) => +item)),
};
