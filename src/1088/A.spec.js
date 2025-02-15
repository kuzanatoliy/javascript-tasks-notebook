const { getPair } = require('./A');

describe('1088A. Ehab and another construction problem', () => {
  it.each`
    n    | num   | result
    ${1} | ${10} | ${[10, 10]}
    ${2} | ${1}  | ${[-1]}
    ${3} | ${5}  | ${[4, 4]}
    ${4} | ${2}  | ${[2, 2]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPair(num, k)).toStrictEqual(result);
  });
});
