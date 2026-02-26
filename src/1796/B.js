module.exports = {
  isItPossibleToBuildMask: (str1, str2) => {
    if (str1[0] === str2[0]) {
      return ['YES', `${str1[0]}*`];
    }
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return ['YES', `*${str1[str1.length - 1]}`];
    }
    for (let j = 1; j < str1.length; j++) {
      const d = `${str1[j - 1]}${str1[j]}`;
      if (str2.indexOf(d) > -1) {
        return ['YES', `*${d}*`];
      }
    }
    return ['NO'];
  },
};
