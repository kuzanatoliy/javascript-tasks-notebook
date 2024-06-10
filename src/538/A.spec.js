const { isItPossibleToCut } = require('./A');

describe('538A. Cutting Banner', () => {
  it.each`
    n    | string                   | result
    ${1} | ${'CODEWAITFORITFORCES'} | ${'YES'}
    ${2} | ${'BOTTOMCODER'}         | ${'NO'}
    ${3} | ${'DECODEFORCES'}        | ${'YES'}
    ${4} | ${'DOGEFORCES'}          | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToCut(string)).toStrictEqual(result);
  });
});
