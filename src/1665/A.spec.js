const { getProps } = require('./A');

describe('1665A. GCD vs LCM', () => {
  it.each`
    n    | num   | result
    ${1} | ${4}  | ${[1, 1, 1, 1]}
    ${2} | ${7}  | ${[4, 1, 1, 1]}
    ${3} | ${8}  | ${[5, 1, 1, 1]}
    ${4} | ${9}  | ${[6, 1, 1, 1]}
    ${5} | ${10} | ${[7, 1, 1, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getProps(num)).toStrictEqual(result);
  });
});
