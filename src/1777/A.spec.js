const { getCountOfOperations } = require('./A');

describe('1777A. Everybody Likes Good Arrays!', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 7, 11, 2, 13]}  | ${2}
    ${2} | ${[1, 2, 3, 4]}       | ${0}
    ${3} | ${[1, 1, 1, 2, 2, 3]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toStrictEqual(result);
  });
});
