const CONST = [1, 3, 6, 10];

module.exports = {
  getCountOfDigitsCharacter: (number) => {
    const l = `${number}`;
    return (+l[0] - 1) * CONST[3] + CONST[l.length - 1];
  },
};
