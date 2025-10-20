const { isPrime } = require('./C');

describe('2093C. Simple Repetition', () => {
  it.each`
    n    | x     | k    | result
    ${1} | ${52} | ${3} | ${'NO'}
    ${2} | ${6}  | ${7} | ${'NO'}
    ${3} | ${7}  | ${1} | ${'YES'}
    ${4} | ${1}  | ${7} | ${'NO'}
    ${5} | ${1}  | ${1} | ${'NO'}
    ${6} | ${4}  | ${1} | ${'NO'}
  `('Base test: $n', ({ x, k, result }) => {
    expect(isPrime(x, k)).toBe(result);
  });
});
