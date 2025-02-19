const { roundNumber } = require('./A');

describe('898A. Rounding', () => {
  it.each`
    n    | num           | result
    ${1} | ${5}          | ${10}
    ${2} | ${113}        | ${110}
    ${3} | ${1000000000} | ${1000000000}
    ${4} | ${5432359}    | ${5432360}
  `('Base test: $n', ({ num, result }) => {
    expect(roundNumber(num)).toBe(result);
  });
});
