const { getMeta } = require('./B');

describe('2032B. Medians', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${1}  | ${1} | ${[1, [1]]}
    ${2} | ${3}  | ${2} | ${[3, [1, 2, 3]]}
    ${3} | ${3}  | ${3} | ${[-1]}
    ${4} | ${15} | ${8} | ${[3, [1, 2, 15]]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMeta(num, k)).toStrictEqual(result);
  });
});
