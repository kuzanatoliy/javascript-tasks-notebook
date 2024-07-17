module.exports = {
  isYes: (string) => {
    const yes = 'Yes';
    let k = yes.indexOf(string[0]);
    if (k < 0) {
      return 'NO';
    }
    for (let j = 0; j < string.length; j++) {
      if (string[j] !== yes[k]) {
        return 'NO';
      }
      k = (k + 1) % yes.length;
    }
    return 'YES';
  },
};
