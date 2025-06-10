const { transformArray } = require('./B');

describe('1501B. Napoleon Cake', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[0, 3, 0, 0, 1, 3]}             | ${[1, 1, 0, 1, 1, 1]}
    ${2} | ${[0, 0, 0, 1, 0, 5, 0, 0, 0, 2]} | ${[0, 1, 1, 1, 1, 1, 0, 0, 1, 1]}
    ${3} | ${[0, 0, 0]}                      | ${[0, 0, 0]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
