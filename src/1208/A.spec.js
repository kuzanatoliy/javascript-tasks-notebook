const { getOrderNumber } = require('./A');

describe('1208A. XORinacci', () => {
  it.each`
    n    | a      | b      | num        | result
    ${1} | ${3}   | ${4}   | ${2}       | ${7}
    ${2} | ${4}   | ${5}   | ${0}       | ${4}
    ${3} | ${325} | ${265} | ${1231232} | ${76}
  `('Base test: $n', ({ a, b, num, result }) => {
    expect(getOrderNumber(a, b, num)).toBe(result);
  });
});
