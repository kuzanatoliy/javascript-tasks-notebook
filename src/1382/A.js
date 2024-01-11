module.exports = {
  isSolutionExisted: (number1, number2) => {
    const unique = new Set(number1);
    let flag = null;
    for (let j = 0; j < number2.length; j++) {
      if (unique.has(number2[j])) {
        flag = number2[j];
        break;
      }
    }
    if (flag) {
      return ['YES', [1, flag]];
    } else {
      return ['NO'];
    }
  },
};
