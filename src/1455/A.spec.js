const { getCountOfCombinations } = require('./A');

describe('1455A. Strange Functions', () => {
  it.each`
    n    | origin                          | result
    ${1} | ${'4'}                          | ${1}
    ${2} | ${'37'}                         | ${2}
    ${3} | ${'998244353'}                  | ${9}
    ${4} | ${'1000000007'}                 | ${10}
    ${5} | ${'12345678901337426966631415'} | ${26}
  `('Base test: $n', ({ origin, result }) => {
    expect(getCountOfCombinations(origin)).toBe(result);
  });
});
