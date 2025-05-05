const { getSumResult } = require('./A');

describe('598A. Tricky Sum', () => {
  it.each`
    n    | num            | result
    ${1} | ${4n}          | ${-4n}
    ${2} | ${1000000000n} | ${499999998352516354n}
  `('Base test: $n', ({ num, result }) => {
    expect(getSumResult(num)).toBe(result);
  });
});
