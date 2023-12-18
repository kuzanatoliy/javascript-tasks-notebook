const { getBalancedArray } = require('./B');

describe('1343B. Balanced Array', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${['NO', []]}
    ${2} | ${4}   | ${['YES', [2, 4, 1, 5]]}
    ${3} | ${6}   | ${['NO', []]}
    ${4} | ${8}   | ${['YES', [2, 4, 6, 8, 1, 3, 5, 11]]}
    ${5} | ${10}  | ${['NO', []]}
  `('Base test: $n', ({ number, result }) => {
    expect(getBalancedArray(number)).toStrictEqual(result);
  });
});
