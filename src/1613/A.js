module.exports = {
  compareNumbers: (num1, num2) => {
    const l1 = num1[0].toString().length + num1[1];
    const l2 = num2[0].toString().length + num2[1];
    if (l1 === l2) {
      const n1 = Number(
        num1[0] +
          '0'.repeat(
            Math.max(0, num2[0].toString().length - num1[0].toString().length)
          )
      );
      const n2 = Number(
        num2[0] +
          '0'.repeat(
            Math.max(0, num1[0].toString().length - num2[0].toString().length)
          )
      );
      if (n1 > n2) {
        return '>';
      } else if (n1 < n2) {
        return '<';
      } else {
        return '=';
      }
    } else if (l1 < l2) {
      return '<';
    } else {
      return '>';
    }
  },
};
