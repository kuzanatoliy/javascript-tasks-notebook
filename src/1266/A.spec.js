const { getWinner } = require('./A');

describe('1266A. Payment Without Change', () => {
  it.each`
    n    | snum                                                | result
    ${1} | ${'603'}                                            | ${'red'}
    ${2} | ${'006'}                                            | ${'red'}
    ${3} | ${'205'}                                            | ${'cyan'}
    ${4} | ${'228'}                                            | ${'cyan'}
    ${5} | ${'1053'}                                           | ${'cyan'}
    ${6} | ${'0000000000000000000000000000000000000000000000'} | ${'red'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getWinner(snum)).toBe(result);
  });
});
