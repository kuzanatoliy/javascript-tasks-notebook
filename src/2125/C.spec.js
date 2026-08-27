const { getMaxSum } = require('./C');

describe('2125C. Count Good Numbers', () => {
  it.each`
    n    | a      | b                       | result
    ${1} | ${2n}  | ${100n}                 | ${21n}
    ${2} | ${2n}  | ${1000n}                | ${227n}
    ${3} | ${13n} | ${37n}                  | ${7n}
    ${4} | ${2n}  | ${1000000000000000000n} | ${228571428571428570n}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getMaxSum(a, b)).toBe(result);
  });
});
