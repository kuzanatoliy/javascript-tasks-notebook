module.exports = {
  checkDoubleNumbers: (doubleNumber1, doubleNumber2) => {
    const temp = [];
    for (let i = 0; i < doubleNumber1.length; i++) {
      temp.push(doubleNumber1[i] !== doubleNumber2[i] ? 1 : 0);
    }
    return temp.join('');
  },
};
