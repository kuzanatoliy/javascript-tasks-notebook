const { getCountOfOperations } = require('./A');

describe('1721A. Image', () => {
  it.each`
    n    | str       | result
    ${1} | ${'rbbr'} | ${1}
    ${2} | ${'ccwb'} | ${2}
    ${3} | ${'aaaa'} | ${0}
    ${4} | ${'abcd'} | ${3}
    ${5} | ${'yyxx'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
