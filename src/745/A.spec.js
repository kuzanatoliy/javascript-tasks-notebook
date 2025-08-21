const { getCountOfStrings } = require('./A');

describe('745A. Hongcow Learns the Cyclic Shift', () => {
  it.each`
    n    | str                                                   | result
    ${1} | ${'abcd'}                                             | ${4}
    ${2} | ${'bbb'}                                              | ${1}
    ${3} | ${'yzyz'}                                             | ${2}
    ${4} | ${'pqqpqqpqqpqqpqqpqqpqqpqqpqqpqqpqqppqppqppqppqppq'} | ${48}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfStrings(str)).toBe(result);
  });
});
