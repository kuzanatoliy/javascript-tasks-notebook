const { getWinner } = require('./C');

describe('2104C. Card Game', () => {
  it.each`
    n    | map              | result
    ${1} | ${'AB'}          | ${'Alice'}
    ${2} | ${'BA'}          | ${'Bob'}
    ${3} | ${'ABAB'}        | ${'Bob'}
    ${4} | ${'BABA'}        | ${'Bob'}
    ${5} | ${'BAA'}         | ${'Alice'}
    ${6} | ${'AAAAB'}       | ${'Alice'}
    ${7} | ${'BAAAB'}       | ${'Bob'}
    ${8} | ${'BBBAAA'}      | ${'Alice'}
    ${9} | ${'AABBBBAABAB'} | ${'Bob'}
  `('Base test: $n', ({ map, result }) => {
    expect(getWinner(map)).toStrictEqual(result);
  });
});
