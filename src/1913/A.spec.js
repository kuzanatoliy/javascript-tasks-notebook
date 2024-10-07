const { getScores } = require('./A');

describe('1913A. Rating Increase', () => {
  it.each`
    n    | nstr          | result
    ${1} | ${'20002001'} | ${['2000', '2001']}
    ${2} | ${'391125'}   | ${['3', '91125']}
    ${3} | ${'200200'}   | ${[-1]}
    ${4} | ${'2001000'}  | ${['200', '1000']}
    ${5} | ${'12'}       | ${['1', '2']}
  `('Base test: $n', ({ nstr, result }) => {
    expect(getScores(nstr)).toStrictEqual(result);
  });
});
