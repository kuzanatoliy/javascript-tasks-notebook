const { isInCodeforces } = require('./A');

describe('1791A. Codeforces Checking', () => {
  it.each`
    n     | letter | result
    ${1}  | ${'a'} | ${'NO'}
    ${2}  | ${'b'} | ${'NO'}
    ${3}  | ${'c'} | ${'YES'}
    ${4}  | ${'d'} | ${'YES'}
    ${5}  | ${'e'} | ${'YES'}
    ${6}  | ${'f'} | ${'YES'}
    ${7}  | ${'g'} | ${'NO'}
    ${8}  | ${'h'} | ${'NO'}
    ${9}  | ${'i'} | ${'NO'}
    ${10} | ${'j'} | ${'NO'}
  `('Base test: $n', ({ letter, result }) => {
    expect(isInCodeforces(letter)).toBe(result);
  });
});
