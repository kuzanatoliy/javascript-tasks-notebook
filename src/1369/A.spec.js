const { isItBeautiful } = require('./A');

describe('1369A. FashionabLee', () => {
  it.each`
    n    | count         | result
    ${1} | ${3}          | ${'NO'}
    ${2} | ${4}          | ${'YES'}
    ${3} | ${12}         | ${'YES'}
    ${4} | ${1000000000} | ${'YES'}
  `('Base test: $n', ({ count, result }) => {
    expect(isItBeautiful(count)).toBe(result);
  });
});
