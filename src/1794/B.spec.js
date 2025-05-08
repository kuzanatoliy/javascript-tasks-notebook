const { transformArray } = require('./B');

describe('1794B. Not Dividing', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[2, 4, 3, 6]} | ${[3, 5, 4, 7]}
    ${2} | ${[1, 2, 3]}    | ${[2, 3, 4]}
    ${3} | ${[4, 2]}       | ${[5, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
