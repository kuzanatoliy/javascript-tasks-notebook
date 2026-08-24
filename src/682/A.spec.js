const { getPairsCount } = require('./A');

describe('682A. Alyona and Numbers', () => {
  it.each`
    n    | a     | b     | result
    ${1} | ${6}  | ${12} | ${14}
    ${2} | ${11} | ${14} | ${31}
    ${3} | ${1}  | ${5}  | ${1}
    ${4} | ${3}  | ${8}  | ${5}
    ${5} | ${5}  | ${7}  | ${7}
    ${6} | ${21} | ${21} | ${88}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getPairsCount(a, b)).toBe(result);
  });
});
