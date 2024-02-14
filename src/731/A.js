module.exports = {
  getMinNumbersOfRotations: (string) => {
    string = `a${string}`;
    let sum = 0;
    for (let j = 1; j < string.length; j++) {
      sum += Math.min(
        Math.abs(string[j - 1].charCodeAt() - string[j].charCodeAt()),
        string[j - 1].charCodeAt() -
          'a'.charCodeAt() +
          'z'.charCodeAt() -
          string[j].charCodeAt() +
          1,
        string[j].charCodeAt() -
          'a'.charCodeAt() +
          'z'.charCodeAt() -
          string[j - 1].charCodeAt() +
          1
      );
    }
    return sum;
  },
};
