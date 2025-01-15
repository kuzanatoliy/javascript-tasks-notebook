const { getStrs } = require('./A');

describe('1602A. Two Subsequences', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${'fc'}              | ${['c', 'f']}
    ${2} | ${'aaaa'}            | ${['a', 'aaa']}
    ${3} | ${'thebrightboiler'} | ${['b', 'therightboiler']}
  `('Base test: $n', ({ arr, result }) => {
    expect(getStrs(arr)).toStrictEqual(result);
  });
});
