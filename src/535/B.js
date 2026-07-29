module.exports = {
  getPosition: (num) => {
    const sNum = num.toString();
    let p = 0;
    for (let j = 0; j < sNum.length; j++) {
      p = p * 2 + (sNum[j] === '4' ? 1 : 2);
    }
    return p;
  },
};
