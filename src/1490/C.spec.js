const { isRepresentable } = require('./C');

describe('1490C. Sum of Cubes', () => {
  it.each`
    n    | array           | result
    ${1} | ${1}            | ${'NO'}
    ${2} | ${2}            | ${'YES'}
    ${3} | ${4}            | ${'NO'}
    ${4} | ${34}           | ${'NO'}
    ${5} | ${35}           | ${'YES'}
    ${6} | ${16}           | ${'YES'}
    ${7} | ${703657519796} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isRepresentable(array)).toBe(result);
  });
});
