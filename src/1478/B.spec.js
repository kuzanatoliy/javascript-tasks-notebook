const { isItPossibleToConstruct } = require('./B');

describe('1478B. Nezzar and Lucky Number', () => {
  it.each`
    n    | d    | arr                                         | result
    ${1} | ${7} | ${[24, 25, 27]}                             | ${['YES', 'NO', 'YES']}
    ${2} | ${7} | ${[51, 52, 53, 54, 55, 56, 57, 58, 59, 60]} | ${['YES', 'YES', 'NO', 'YES', 'YES', 'YES', 'YES', 'YES', 'YES', 'NO']}
  `('Base test: $n', ({ d, arr, result }) => {
    expect(isItPossibleToConstruct(d, arr)).toStrictEqual(result);
  });
});
