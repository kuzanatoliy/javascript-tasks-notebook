const { isZ } = require('./A');

describe('2225A. A Number Between Two Others', () => {
  it.each`
    n    | x             | y              | result
    ${1} | ${1}          | ${2}           | ${'NO'}
    ${2} | ${1}          | ${3}           | ${'YES'}
    ${3} | ${1234567890} | ${12345678900} | ${'YES'}
    ${4} | ${2}          | ${8}           | ${'YES'}
    ${5} | ${7}          | ${84}          | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isZ(x, y)).toBe(result);
  });
});
