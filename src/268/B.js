module.exports = {
  checkCountOfCombination: (buttonsCount) => {
    let arr1 = [0, 1, 3];
    if (buttonsCount < 3) {
      return arr1[buttonsCount];
    } else {
      let t1 = 7,
        t2 = 4,
        t3 = 2;
      for (let i = 3; i < buttonsCount; i++) {
        t3++;
        t2 += t3;
        t1 += t2;
      }
      return t1;
    }
  },
};
