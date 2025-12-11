const { getCountOfSlices } = require('./A');

describe('2156A. Pizza Time', () => {
  it.each`
    n    | num  | result
    ${1} | ${8} | ${3}
    ${2} | ${4} | ${1}
    ${3} | ${3} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfSlices(num)).toBe(result);
  });
});
