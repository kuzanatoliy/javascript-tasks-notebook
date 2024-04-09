const { isItPossibleToGetOddSum } = require('./A');

describe('1363A. Odd Selection', () => {
  it.each`
    n    | length | array              | result
    ${1} | ${1}   | ${[999]}           | ${'YES'}
    ${2} | ${1}   | ${[1000]}          | ${'NO'}
    ${3} | ${1}   | ${[51, 50]}        | ${'YES'}
    ${4} | ${2}   | ${[51, 50]}        | ${'YES'}
    ${5} | ${3}   | ${[101, 102, 103]} | ${'NO'}
  `('Base test: $n', ({ length, array, result }) => {
    expect(isItPossibleToGetOddSum(length, array)).toBe(result);
  });
});
