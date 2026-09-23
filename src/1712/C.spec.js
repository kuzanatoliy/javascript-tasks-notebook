const { getMinOperationsCount } = require('./C');

describe('1712C. Sort Zero', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 3, 2]}       | ${1}
    ${2} | ${[1, 3, 1, 3]}    | ${2}
    ${3} | ${[4, 1, 5, 3, 2]} | ${4}
    ${4} | ${[2, 4, 1, 2]}    | ${3}
    ${5} | ${[1]}             | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinOperationsCount(arr)).toStrictEqual(result);
  });
});
