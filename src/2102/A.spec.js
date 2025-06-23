const { isItPossibleToBuild } = require('./A');

describe('2102A. Dinner Time', () => {
  it.each`
    n    | num   | m    | p    | q    | result
    ${1} | ${3}  | ${2} | ${2} | ${1} | ${'YES'}
    ${2} | ${1}  | ${1} | ${1} | ${1} | ${'YES'}
    ${3} | ${5}  | ${4} | ${2} | ${3} | ${'YES'}
    ${4} | ${10} | ${7} | ${5} | ${2} | ${'NO'}
    ${5} | ${4}  | ${4} | ${1} | ${3} | ${'NO'}
  `('Base test: $n', ({ num, m, p, q, result }) => {
    expect(isItPossibleToBuild(num, m, p, q)).toBe(result);
  });
});
