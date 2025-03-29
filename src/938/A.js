/* eslint-disable prefer-destructuring */
module.exports = {
  correctString: (str) => {
    let s = str[0];

    for (let j = 1; j < str.length; j++) {
      if (
        !(
          (str[j - 1] === 'a' ||
            str[j - 1] === 'e' ||
            str[j - 1] === 'i' ||
            str[j - 1] === 'o' ||
            str[j - 1] === 'u' ||
            str[j - 1] === 'y') &&
          (str[j] === 'a' ||
            str[j] === 'e' ||
            str[j] === 'i' ||
            str[j] === 'o' ||
            str[j] === 'u' ||
            str[j] === 'y')
        )
      ) {
        s += str[j];
      }
    }
    return s;
  },
};
