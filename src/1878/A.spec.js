const { isSubstringExist } = require('./A');

describe('1878A. How Much Does Daytona Cost?', () => {
  it.each`
    n    | number | array                | result
    ${1} | ${4}   | ${[1, 4, 3, 4, 1]}   | ${'YES'}
    ${2} | ${1}   | ${[2, 3, 4, 4]}      | ${'NO'}
    ${3} | ${6}   | ${[43, 5, 60, 4, 2]} | ${'NO'}
    ${4} | ${5}   | ${[1, 5]}            | ${'YES'}
    ${5} | ${1}   | ${[5, 3, 3, 1]}      | ${'YES'}
    ${6} | ${3}   | ${[3]}               | ${'YES'}
    ${7} | ${3}   | ${[3, 4, 1, 5, 5]}   | ${'YES'}
  `('Base test: $n', ({ number, array, result }) => {
    expect(isSubstringExist(number, array)).toBe(result);
  });
});
