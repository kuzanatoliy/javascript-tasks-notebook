const { getCountOfRemoves } = require('./A');

describe('1303A. Erasing Zeroes', () => {
  it.each`
    n    | string       | result
    ${1} | ${'010011'}  | ${2}
    ${2} | ${'0'}       | ${0}
    ${3} | ${'1111000'} | ${0}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfRemoves(string)).toBe(result);
  });
});
