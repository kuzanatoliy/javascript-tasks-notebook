const { isItCorrect } = require('./A');

describe('2067A. Adjacent Digit Sums', () => {
  it.each`
    n    | x       | y      | result
    ${1} | ${1}    | ${2}   | ${'YES'}
    ${2} | ${77}   | ${77}  | ${'NO'}
    ${3} | ${997}  | ${999} | ${'NO'}
    ${4} | ${999}  | ${1}   | ${'YES'}
    ${5} | ${1000} | ${1}   | ${'NO'}
    ${6} | ${1}    | ${11}  | ${'NO'}
    ${7} | ${18}   | ${1}   | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItCorrect(x, y)).toBe(result);
  });
});
