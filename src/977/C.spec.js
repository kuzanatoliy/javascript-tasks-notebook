const { findX } = require('./C');

describe('977C. Less or Equal', () => {
  it.each`
    n    | array                      | limit | result
    ${1} | ${[3, 7, 5, 1, 10, 3, 20]} | ${4}  | ${5}
    ${2} | ${[3, 7, 5, 1, 10, 3, 20]} | ${2}  | ${-1}
    ${3} | ${[1]}                     | ${0}  | ${-1}
    ${4} | ${[2]}                     | ${0}  | ${1}
  `('Base test: $n', ({ array, limit, result }) => {
    expect(findX(array, limit)).toBe(result);
  });
});
