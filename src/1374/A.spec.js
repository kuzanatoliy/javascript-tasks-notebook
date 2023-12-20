const { getMaxInteger } = require('./A');

describe('1374A. Required Remainder', () => {
  it.each`
    n    | number1      | number2 | number3       | result
    ${1} | ${7}         | ${5}    | ${12345}      | ${12339}
    ${2} | ${5}         | ${0}    | ${4}          | ${0}
    ${3} | ${10}        | ${5}    | ${15}         | ${15}
    ${4} | ${17}        | ${8}    | ${54321}      | ${54306}
    ${5} | ${499999993} | ${9}    | ${1000000000} | ${999999995}
    ${6} | ${10}        | ${5}    | ${185}        | ${185}
    ${7} | ${2}         | ${0}    | ${999999999}  | ${999999998}
  `('Base test: $n', ({ number1, number2, number3, result }) => {
    expect(getMaxInteger(number1, number2, number3)).toBe(result);
  });
});
