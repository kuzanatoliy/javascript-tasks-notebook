module.exports = {
  isItPossibleToRemoveZero: (num1, num2) => {
    const a = num1.toString().split(0);
    const b = num2.toString().split(0);

    const number1 = parseInt(a.join(''));
    const number2 = parseInt(b.join(''));

    const resultWithOutZeroes = number1 + number2;

    const realVal = (parseInt(num1) + parseInt(num2)).toString().split('0');

    return resultWithOutZeroes === parseInt(realVal.join('')) ? 'YES' : 'NO';
  },
};
