module.exports = {
  getMinNumberOfStrings: (string) => {
    let s = string;
    let c = 1;
    const n = string.length;

    if (n % 2 === 0) {
      const strArr = string.split('');
      const count = strArr.reduce((prev, curr) => prev + parseInt(curr), 0);

      if (n / 2 === count) {
        const last = strArr.pop();
        c = 2;
        s = `${strArr.join('')} ${last}`;
      }
    }

    return [c, s];
  },
};
